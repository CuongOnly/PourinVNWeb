// components/LayoutHR.tsx
'use client';

import { useState, useEffect } from 'react';
import TruckLoader from './Truckloader';
import {X} from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  status: 'open' | 'closed';
  description: string;
  requirements: string[];
  benefits: string[];
}

interface CandidateInfo {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  coverLetter: string;
  cvFile: File | null;
}

const LayoutHR = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [showCandidateForm, setShowCandidateForm] = useState(false);
  const [showDevelopmentNotice, setShowDevelopmentNotice] = useState(true);
    const [progress, setProgress] = useState(100);

  const [candidateInfo, setCandidateInfo] = useState<CandidateInfo>({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    cvFile: null,
  });
  useEffect(() => {
    if (showDevelopmentNotice) {
      const totalTime = 15000; // 10 giây
      const intervalTime = 100; // Cập nhật mỗi 100ms
      const steps = totalTime / intervalTime;
      const decrement = 100 / steps;

      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev <= 0) {
            clearInterval(timer);
            setShowDevelopmentNotice(false);
            return 0;
          }
          return prev - decrement;
        });
      }, intervalTime);

      const autoCloseTimer = setTimeout(() => {
        setShowDevelopmentNotice(false);
        clearInterval(timer);
      }, totalTime);

      return () => {
        clearInterval(timer);
        clearTimeout(autoCloseTimer);
      };
    } else {
      setProgress(100);
    }
  }, [showDevelopmentNotice]);

  // Dữ liệu mẫu các vị trí tuyển dụng
  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Hà Nội',
      type: 'Full-time',
      salary: '15-25 triệu',
      status: 'open',
      description: 'Chúng tôi đang tìm kiếm một Frontend Developer có kinh nghiệm với React và Next.js để tham gia vào đội ngũ phát triển sản phẩm.',
      requirements: [
        '2+ năm kinh nghiệm với React/Next.js',
        'Thành thạo TypeScript',
        'Kinh nghiệm với Tailwind CSS',
        'Hiểu biết về RESTful APIs',
      ],
      benefits: [
        'Lương thưởng cạnh tranh',
        'Bảo hiểm sức khỏe',
        'Đào tạo và phát triển',
        'Môi trường làm việc trẻ trung',
      ],
    },
    {
      id: '2',
      title: 'Backend Developer',
      department: 'Engineering',
      location: 'TP.HCM',
      type: 'Full-time',
      salary: '20-30 triệu',
      status: 'open',
      description: 'Tuyển dụng Backend Developer với kinh nghiệm về Node.js và database design.',
      requirements: [
        '3+ năm kinh nghiệm với Node.js',
        'Thành thạo MongoDB/PostgreSQL',
        'Kinh nghiệm với Docker',
        'Hiểu biết về microservices',
      ],
      benefits: [
        'Lương cao',
        'Remote work option',
        'Team building hàng quý',
        'Phụ cấp ăn trưa',
      ],
    },
    {
      id: '3',
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Đà Nẵng',
      type: 'Full-time',
      salary: '12-18 triệu',
      status: 'open',
      description: 'Tìm kiếm UI/UX Designer sáng tạo để thiết kế trải nghiệm người dùng tuyệt vời.',
      requirements: [
        '2+ năm kinh nghiệm UI/UX',
        'Thành thạo Figma',
        'Portfolio ấn tượng',
        'Hiểu biết về design system',
      ],
      benefits: [
        'Macbook Pro provided',
        'Flexible working hours',
        'Creative environment',
        'Skill development budget',
      ],
    },
  ];

  const handleJobSelect = (job: JobPosition) => {
    setSelectedJob(job);
  };

  const handleApply = () => {
    setShowCandidateForm(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCandidateInfo({
        ...candidateInfo,
        cvFile: e.target.files[0],
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCandidateInfo({
      ...candidateInfo,
      [name]: value,
    });
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý submit application ở đây
    console.log('Application submitted:', candidateInfo);
    alert('Đã gửi đơn ứng tuyển thành công!');
    setShowCandidateForm(false);
    setCandidateInfo({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      coverLetter: '',
      cvFile: null,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Development Notice */}
      {showDevelopmentNotice && (
        <div className="fixed top-6 right-6 max-w-md w-full z-50 animate-slide-in-right">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Header */}
              <button
                onClick={() => setShowDevelopmentNotice(false)}
                className="absolute top-4 right-4 text-black/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/20"
                aria-label="Đóng thông báo"
              >
                <X className="w-5 h-5" />
              </button>

            {/* Content với TruckLoader lớn */}
            <div className="p-6">
              {/* TruckLoader lớn ở trên cùng */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="scale-100">
                    <TruckLoader />
                  </div>
                </div>
              </div>

              

              {/* Message Box */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h2 className="text-yellow-800 font-semibold">🚧Thông báo</h2>
                </div>
                {/* Developer Info */}
              <div className="text-center mb-6">
                <h4 className="font-bold text-gray-900 text-lg mb-2">
                 <p className="text-gray-600 text-sm mb-3">Nguyễn Đức Cường đang lập trình trang web này</p> 
                 <p>阮德强正在编程这个网站</p> 
                </h4>
              </div>
                <p className="text-yellow-700 text-sm  text-center mb-2">
                  Phần này đang được phát triển, vui lòng quay lại sau! 😊
                </p>
                <p className="text-yellow-600 text-center">
                  此部分功能正在开发中，请稍后再来！😊
                </p>
              </div>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>Tự động đóng sau</span>
                  <span>{Math.ceil(progress / 15)}s</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Action button */}
              <button
                onClick={() => setShowDevelopmentNotice(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold text-sm transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Đã hiểu - 明白了
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Vị Trí Tuyển Dụng
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá cơ hội nghề nghiệp và trở thành một phần của đội ngũ chúng tôi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job List Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Vị Trí Đang Tuyển
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Vị Trí
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phòng Ban
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Địa Điểm
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Mức Lương
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Trạng Thái
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {jobPositions.map((job) => (
                      <tr
                        key={job.id}
                        className={`hover:bg-gray-50 cursor-pointer transition-colors ${selectedJob?.id === job.id ? 'bg-blue-50' : ''
                          }`}
                        onClick={() => handleJobSelect(job)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {job.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {job.type}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {job.department}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {job.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {job.salary}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${job.status === 'open'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                            }`}>
                            {job.status === 'open' ? 'Đang tuyển' : 'Đã đóng'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Job Details */}
          <div className="lg:col-span-1">
            {selectedJob ? (
              <div className="bg-white rounded-lg shadow-lg sticky top-8">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Chi Tiết Vị Trí
                  </h2>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {selectedJob.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {selectedJob.department}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {selectedJob.location}
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {selectedJob.type}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Mô tả công việc:</h4>
                    <p className="text-gray-700">{selectedJob.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Yêu cầu:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Quyền lợi:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {selectedJob.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">Mức lương:</h4>
                    <p className="text-yellow-700 font-medium">{selectedJob.salary}</p>
                  </div>

                  <button
                    onClick={handleApply}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Ứng Tuyển Ngay
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Chọn một vị trí
                </h3>
                <p className="text-gray-500">
                  Nhấp vào một vị trí trong bảng để xem chi tiết
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Candidate Application Dialog */}
      {showCandidateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  Đơn Ứng Tuyển
                </h2>
                <button
                  onClick={() => setShowCandidateForm(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mt-2">
                Vị trí: <span className="font-semibold">{selectedJob?.title}</span>
              </p>
            </div>

            <form onSubmit={handleSubmitApplication} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={candidateInfo.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Nhập họ và tên đầy đủ"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={candidateInfo.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={candidateInfo.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Nhập số điện thoại"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kinh nghiệm *
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={candidateInfo.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Ví dụ: 2 năm Frontend"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Thư xin việc *
                </label>
                <textarea
                  name="coverLetter"
                  value={candidateInfo.coverLetter}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Giới thiệu bản thân và lý do ứng tuyển..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Đính kèm CV *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    id="cv-upload"
                    required
                  />
                  <label htmlFor="cv-upload" className="cursor-pointer">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-gray-600 mb-1">
                      <span className="text-blue-600 font-medium">Nhấp để tải lên</span> hoặc kéo thả file
                    </p>
                    <p className="text-gray-500 text-sm">
                      PDF, DOC, DOCX (Tối đa 5MB)
                    </p>
                  </label>
                </div>
                {candidateInfo.cvFile && (
                  <p className="text-green-600 text-sm mt-2">
                    ✓ Đã chọn: {candidateInfo.cvFile.name}
                  </p>
                )}
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCandidateForm(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  Gửi Đơn Ứng Tuyển
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LayoutHR;
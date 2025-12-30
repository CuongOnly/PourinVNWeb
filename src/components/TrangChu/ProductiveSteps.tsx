// components/ProductiveSteps.tsx
'use client';

import Image from 'next/image';

const ProductiveSteps = () => {
  const steps = [
    {
      number: '1',
      title: 'Plan Ahead',
      description: 'Write down 3 key tasks you want to accomplish today before checking your phone.',
      image: 'https://arman-borkhani.github.io/codepen-cpc-css-shape/assets/plan.jpg'
    },
    {
      number: '2',
      title: 'Get Moving',
      description: 'Do a short workout, stretch, or walk to activate your energy and improve your focus.',
      image: 'https://arman-borkhani.github.io/codepen-cpc-css-shape/assets/moving.jpg'
    },
    {
      number: '3',
      title: 'Find Calm',
      description: 'Spend a few quiet minutes meditating, journaling, or just breathing mindfully before diving into work.',
      image: 'https://arman-borkhani.github.io/codepen-cpc-css-shape/assets/calm.jpg'
    },
    {
      number: '4',
      title: 'Stay Consistent',
      description: 'Build a routine by practicing these steps daily to form lasting productive habits.',
      image: 'https://arman-borkhani.github.io/codepen-cpc-css-shape/assets/calm.jpg'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-8">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            4 Simple Steps to Start Your Day Productively
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Boost your focus and energy from the moment you wake up with these easy daily habits.
          </p>
        </div>

        {/* Cards Grid - 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group flex flex-col"
            >
              {/* Card Header with Number */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 flex-1 pr-4">
                  {step.title}
                </h3>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-lg font-bold text-gray-700 flex-shrink-0">
                  {step.number}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                {step.description}
              </p>

              {/* Image */}
              <div className="h-48 rounded-2xl overflow-hidden relative">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMkO0Lm6EeSqB6FnoTQHmLdajMshUqhwOp6FkCjYlUy9CgR43A0HvBpW4HqGtQ4Icu5VkUqjCKhHqUc4Hpt2c4pGQ0Sslq2VYr2Akje1avtET3gACm23eRgAKnFkUjS2gCkBm5lsqya1FHikrFc0w"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8 lg:hidden">
          {steps.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 bg-gray-300 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductiveSteps;
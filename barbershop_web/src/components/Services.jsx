import React from 'react'
import backImage from '../images/LoginRegister2.jpg'

function ServicesComponent() {
  const servicesData = [
    {
      id: 1,
      title: 'Haircut',
      description: 'A professional haircut to suit your style.',
      price: '$20',
    },
    {
      id: 2,
      title: 'Beard Trim',
      description: 'Get your beard shaped and styled.',
      price: '$10',
    },
    {
      id: 3,
      title: 'Shave',
      description: 'Enjoy a close and comfortable shave.',
      price: '$15',
    },
    // Add more services as needed
  ]

  return (
    <div
      className='relative min-h-screen bg-cover'
      style={{ backgroundImage: `url(${backImage})` }}
    >
      <div className='absolute left-1/2 transform -translate-x-1/2 container mx-auto px-4 lg:px-8 font-bold your-permanent-marker-text sm:mt-15'>
        <h2 className='text-3xl font-bold mb-12 lg:mb-20 text-center'>
          Serviciile Noastre
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {servicesData.map((service) => (
            <div
              key={service.id}
              className='bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 border border-gray-300'
            >
              <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
              <p className='text-gray-600 mb-4'>{service.description}</p>
              <p className='text-green-500 font-bold'>Pret: {service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesComponent

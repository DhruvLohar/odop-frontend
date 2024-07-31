import React from 'react';

const notifications = [
  {
    id: 1,
    photo: '/artisanProfileImage1.png',
    heading: 'New Workshop Available!',
    description: 'Join our latest workshop on traditional crafts next week.',
  },
  {
    id: 2,
    photo: '/districtArtisanImage2.png',
    heading: 'Product Update',
    description: 'Check out the new features in our latest product release.',
  },
  {
    id: 3,
    photo: '/districtArtisanImage2.png',
    heading: 'Special Offer',
    description: 'Get 20% off on your next purchase with code SAVE20.',
  },
];

const NotificationCard = ({ photo, heading, description }) => (
  <div>
    <div className="bg-white hover:bg-slate-100 rounded-lg p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center ">
            <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black'>
            <img src={photo} alt={heading} className='w-full h-full rounded-full object-cover'/>
            </div>
            <div>
            <h2 className="text-lg sm:text-xl font-bold mb-2">{heading}</h2>
            <p className="text-gray-600 text-sm sm:text-base">{description}</p>
            </div>   
    </div>
    <div className='h-[1px] w-full bg-gray-400 my-1'>

    </div>
  </div>
);

const Page = () => {
  return (
    <>
      <div className="ml-3 p-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Notifications</h1>
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            photo={notification.photo}
            heading={notification.heading}
            description={notification.description}
          />
        ))}
      </div>
    </>
  );
}

export default Page;

import React from 'react';
import stdntiimg from '../../assets/student-img/studentImg.jpg'
const Feedback = () => {
    return (
        <div className="bg-gray-500 text-white grid grid-cols-2 gap-4 p-8">
            {/* Image column */}
            <div className="flex items-center justify-center">
                <img
                    src={stdntiimg}
                    alt="feedback"
                    className="rounded-lg"
                />
            </div>

            {/* Text column */}
            <div className="flex items-center">
                <p className='max-w-md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                    exercitationem magnam aperiam, harum dicta distinctio. Officiis nihil
                    fugit, cumque earum deserunt commodi in vel magnam fugiat perspiciatis
                    voluptatibus doloribus obcaecati?
                </p>
            </div>
        </div>
    );
};

export default Feedback;

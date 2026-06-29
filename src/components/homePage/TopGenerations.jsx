import React from 'react';
import PhotoCard from '../PhotoCard';

const TopGenerations = async () => {

    const res = await fetch('https://ph-conseptual-session-08-next-js-pr.vercel.app/data.json');
    const data = await res.json();

    const topPhotos = data.slice(0, 8);

    console.log(topPhotos);
    return (
        <div>
            <div className='w-7xl mx-auto'>
                    <h1 className='font-bold text-2xl py-5'>Top Generations</h1>

                    <div className='grid grid-cols-4 gap-5'>
                        {
                            topPhotos.map(photo => 
                                <PhotoCard key={photo.id} photo={photo}></PhotoCard>
                            )
                        }
                    </div>
            </div>
        </div>
    );
};

export default TopGenerations;
import React from 'react';

const PhotoDetailsPage = async ({params}) => {
    const {id} = await params;

    const res = await fetch('https://ph-conseptual-session-08-next-js-pr.vercel.app/data.json');
    const data = await res.json();

    const photo = data.find(p => p.id == id);

    return (
        <div>
            <div className='w-7xl mx-auto'>
                <h1>{photo?.title}</h1>
            </div>
        </div>
    );
};

export default PhotoDetailsPage;
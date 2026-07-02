import Category from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";

const AllPhotosPage = async ({searchParams}) => {

    const {category} = await searchParams;
    
    // console.log(category);

    const res = await fetch('https://ph-conseptual-session-08-next-js-pr.vercel.app/data.json');
    const data = await res.json();

    const filteredPhotos = category ? data.filter(photo => photo.category.toLowerCase() == category.toLowerCase()) : data;
    return (
        <div>
            <div className="w-7xl mx-auto">

                <div>
                    <h2 className="text-2xl font-bold py-5">All photos</h2>
                </div>

                <div>
                    <Category></Category>
                </div>

             <div className='grid grid-cols-4 gap-5'>
                        {
                            filteredPhotos.map(photo => 
                                <PhotoCard key={photo.id} photo={photo}></PhotoCard>
                            )
                        }
                    </div>
            </div>
        </div>
    );
};

export default AllPhotosPage;
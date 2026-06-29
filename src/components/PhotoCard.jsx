import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { FaDownload, FaHeart } from "react-icons/fa";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="border shadow rounded-xl">
      <div className="relative w-full aspect-square">
        <Image
          src={photo.imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={photo.title}
          className="object-cover rounded-lg"
        ></Image>

        <Chip className="sm absolute right-2 top-2">{photo.category}</Chip>
      </div>

      <div>
        <h2 className="font-semibold">{photo.title}</h2>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <FaHeart />
          <h2>{photo.likes}</h2>
        </div>

        <div className="flex gap-1 items-center">
          <FaDownload />
          <h2>{photo.downloads}</h2>
        </div>
      </div>

      <div>
       <Button variant="secondary" className="text-black w-full">
      View
    </Button>
      </div>
    </Card>
  );
};

export default PhotoCard;

interface SectionProps {
  image: { image: string; zoomedImage: string }[];

  sectionIndex?: number; // Add sectionIndex as a prop
  addMoreImages: (sectionIndex: number) => void;
  removeImage: (imageIndex: number, sectionIndex?: number) => void;
  buttonText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ImageInput({
  image,
  sectionIndex,
  addMoreImages,
  removeImage,
  buttonText,
  onChange,
}: SectionProps) {
  const handleClick = () => {
    if (sectionIndex !== undefined) {
      addMoreImages(sectionIndex);
    } else {
      addMoreImages(-1);
    }
  };

  return (
    <>
      <div className="flex flex-col bg-gray-700 border border-gray-600 rounded">
        {image.map((img, imageIndex) => (
          <div className="relative">
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={onChange}
              className="p-2 w-full"
            />
            <span
              onClick={() => removeImage(imageIndex, sectionIndex)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white cursor-pointer"
            >
              clear
            </span>
          </div>
        ))}
      </div>
      {image.length < 4 && (
        <button
          type="button"
          onClick={handleClick}
          className="px-2 mt-1 text-sm bg-green-600 text-white hover:bg-green-700 rounded ml-auto"
        >
          {buttonText}
        </button>
      )}
    </>
  );
}

export default ImageInput;

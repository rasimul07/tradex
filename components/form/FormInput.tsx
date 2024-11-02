import { FC, useState } from "react";
import React from "react";
import Image from "next/image";
interface PropsType {
  label: string;
  name: string;
  description: string;
  filePreview: string | null;
  setPreview: React.Dispatch<React.SetStateAction<string | null>>;
  accept: string;
}

const FormInput: FC<PropsType> = ({
  label,
  name,
  description,
  filePreview,
  setPreview,
  accept,
}) => {
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setPreview: React.Dispatch<React.SetStateAction<any>>
  ) => {
    const file = event.target.files?.[0];
    // console.log(file);
    if (file) {
      setFileType(file.type);
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };
  const [fileType, setFileType] = useState<String | null>(null);
  return (
    <div className="flex flex-col bg-gray-50 p-4 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="text-left text-base mb-4 sm:mb-0 w-full">
          <strong className="block">{label}</strong>
          <p>{description}</p>
        </div>
        <div className="relative inline-block">
          <input
            type="file"
            accept={accept}
            className="absolute left-0 top-0 w-full h-full opacity-0"
            onChange={(e) => handleFileChange(e, setPreview)}
            name={name}
            id={name}
            height={'auto'}
            width={'auto'}
            required
          />
          <label htmlFor={name}></label>
          <span className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md md:w-40 whitespace-nowrap">
            Choose-File
          </span>
        </div>
      </div>
      {/* Preview */}
      <div className="flex flex-row w-full justify-center md:justify-end">
        {filePreview && (
          <div className="mt-2">
            {fileType?.includes("image") ? (
              <Image
                src={filePreview}
                alt={`${label} Preview`}
                className="w-30 h-30 object-fill"
                width={150}
                height={150}
              />
            ) : fileType?.includes("pdf") ? (
              <a
                href={filePreview}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View PDF
              </a>
            ) : fileType?.includes("video") ? (
              <video className="w-24 h-24" controls>
                <source src={filePreview} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormInput;

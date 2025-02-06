"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Cookies from "js-cookie";
import ImageInput from "./ImageInput";
import { useBrowserStorageState } from "../Hooks/useBrowserStorageState";
import TextInput from "./TextInput";
import { toast, ToastContainer } from "react-toastify";

interface FormDataProps {
  uniqueId: string;
  title: string;
  author: string;
  authorImage: string;
  authorBio: string;
  readTime: string;
  date: string;
  coverImage: { image: string; zoomedImage: string }[];
  alt: string;
  headParagraph: string;
  sections: {
    imgSubtitle: string;
    subtitle: string;
    image: { image: string; zoomedImage: string }[];
    alt: string;
    text: string;
  }[];
  tags: string[];
}

const form = {
  uniqueId: "",
  title: "",
  author: "",
  authorImage: "",
  authorBio: "",
  readTime: "",
  date: "",
  coverImage: [
    {
      image: "",
      zoomedImage: "",
    },
  ],
  alt: "",
  headParagraph: "",
  sections: [
    {
      imgSubtitle: "",
      subtitle: "",
      image: [
        {
          image: "",
          zoomedImage: "",
        },
      ],
      alt: "",
      text: "",
    },
  ],
  tags: [""],
};

function page() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useBrowserStorageState<FormDataProps>(
    form,
    "formData"
  );
  console.log(formData);

  // const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
  const correctPassword = "12345";

  useEffect(() => {
    const accessGranted = Cookies.get("access") === "granted";

    if (accessGranted) {
      setIsAuthenticated(true);
    } else {
      const userPassword = prompt("Enter the admin password:");
      if (userPassword === correctPassword) {
        Cookies.set("access", "granted", { expires: 1 / 96 });
        setIsAuthenticated(true);
      } else {
        alert("Incorrect password. Please try again.");
      }
    }
  }, []);

  const createBlog = async () => {
    setSubmitting(true);
    try {
      const url = `/api/createBlog`;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok)
        throw new Error("Something went wrong while submitting the blog");

      const data = await res.json();
      console.log(data);
      toast.success("Blog created successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      console.error("Error:", err);
      toast.error(
        err instanceof Error ? err.message : "An unexpected error occurred",
        {
          position: "top-right",
          autoClose: 5000,
        }
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    sectionIndex?: number
  ) => {
    const { name, value } = e.target;

    if (sectionIndex !== undefined) {
      // If there's a sectionIndex, we are dealing with fields within a section
      setFormData((prev) => ({
        ...prev,
        sections: prev.sections.map((section, index) =>
          index === sectionIndex ? { ...section, [name]: value } : section
        ),
      }));
    } else {
      // Otherwise, update top-level fields
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "authorImage" | "coverImage" | "sections",
    sectionIndex?: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => {
          if (field === "authorImage") {
            return { ...prev, authorImage: reader.result as string };
          } else if (field === "coverImage") {
            return {
              ...prev,
              coverImage: prev.coverImage.map((img) =>
                img.image === ""
                  ? {
                      image: reader.result as string,
                      zoomedImage: reader.result as string,
                    }
                  : img
              ),
            };
          } else if (field === "sections" && sectionIndex !== undefined) {
            return {
              ...prev,
              sections: prev.sections.map((section, index) =>
                index === sectionIndex
                  ? {
                      ...section,
                      image: section.image.map((img) =>
                        img.image === ""
                          ? {
                              image: reader.result as string,
                              zoomedImage: reader.result as string,
                            }
                          : img
                      ),
                    }
                  : section
              ),
            };
          }
          return prev;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createBlog();
  };

  const addCoverImage = () => {
    setFormData((prev) => ({
      ...prev,
      coverImage: [
        ...prev.coverImage,
        {
          image: "",
          zoomedImage: "",
        },
      ],
    }));
  };

  const removeCoverImage = (index: number) => {
    setFormData((prev) => {
      const newCoverImage = prev.coverImage.filter((_, i) => i !== index);
      return { ...prev, coverImage: newCoverImage };
    });
  };

  const addMoreSection = () => {
    setFormData((prev) => ({
      ...prev,
      sections: [
        ...prev.sections,
        {
          imgSubtitle: "",
          subtitle: "",
          alt: "",
          text: "",
          image: [{ image: "", zoomedImage: "" }],
        },
      ],
    }));
  };

  const handleDelete = (index: number) => {
    setFormData((prev) => {
      const newSections = prev.sections.filter((_, i) => i !== index);
      return { ...prev, sections: newSections };
    });
  };

  const addMoreImagesToSection = (sectionIndex: number) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.map((section, index) =>
        index === sectionIndex && section.image.length < 4
          ? {
              ...section,
              image: [...section.image, { image: "", zoomedImage: "" }],
            }
          : section
      ),
    }));
  };

  const removeSectionImage = (imageIndex: number, sectionIndex?: number) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.map((section, index) =>
        index === sectionIndex
          ? {
              ...section,
              image: section.image.filter((_, i) => i !== imageIndex),
            }
          : section
      ),
    }));
  };

  const addTag = () => {
    setFormData((prev) => ({
      ...prev,
      tags: [...prev.tags, ""],
    }));
  };

  const removeTag = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index),
    }));
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 text-white rounded-lg">
      <ToastContainer />
      <h2 className="text-2xl font-semibold mb-4">Create Blog Entry</h2>
      <form className="space-y-4">
        <TextInput
          name="uniqueId"
          value={formData.uniqueId}
          onHandleChange={handleChange}
        />
        <TextInput
          name="title"
          value={formData.title}
          onHandleChange={handleChange}
        />
        <TextInput
          name="author"
          value={formData.author}
          onHandleChange={handleChange}
        />

        <div>
          <label className="text-xs" htmlFor="author-image">
            Author Image
          </label>
          <input
            type="file"
            name="author-image"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "authorImage")}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
          />
        </div>

        <textarea
          name="authorBio"
          placeholder="Author bio"
          value={formData.authorBio}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
        ></textarea>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
        />

        <TextInput
          name="readTime"
          value={formData.readTime}
          onHandleChange={handleChange}
        />
        <ImageInput
          image={formData.coverImage}
          addMoreImages={addCoverImage}
          removeImage={removeCoverImage}
          buttonText="Add more Cover Images"
          onChange={(e) => handleFileChange(e, "coverImage")}
        />
        <TextInput
          name="alt"
          value={formData.alt}
          onHandleChange={handleChange}
        />

        <textarea
          name="headParagraph"
          placeholder="Introduction"
          value={formData.headParagraph}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
        ></textarea>

        <div className="flex flex-col gap-3">
          {formData.sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="details flex flex-col gap-4 p-4 border border-gray-600 rounded-lg"
            >
              <TextInput
                name="imgSubtitle"
                value={section.imgSubtitle}
                onHandleChange={(e) => handleChange(e, sectionIndex)}
              />
              <ImageInput
                image={section.image}
                sectionIndex={sectionIndex}
                addMoreImages={addMoreImagesToSection}
                removeImage={removeSectionImage}
                buttonText="Add more section images"
                onChange={(e) => handleFileChange(e, "sections", sectionIndex)}
              />
              <TextInput
                name="subtitle"
                value={section.subtitle}
                onHandleChange={(e) => handleChange(e, sectionIndex)}
              />
              <TextInput
                name="alt"
                value={section.alt}
                onHandleChange={(e) => handleChange(e, sectionIndex)}
              />
              <textarea
                name="text"
                placeholder="Text"
                value={section.text}
                onChange={(e) => handleChange(e, sectionIndex)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
                rows={4}
              />
              <button
                onClick={() => handleDelete(sectionIndex)}
                className="px-2 text-sm bg-red-600 text-white hover:bg-red-700 rounded mr-auto"
              >
                Delete
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addMoreSection}
            className="p-3 bg-blue-600 text-white hover:bg-blue-700 rounded ml-auto mt-4"
          >
            Add more
          </button>
        </div>

        {/* <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          value={formData.tags}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
        /> */}

        <>
          <div className="flex flex-col bg-gray-700 border border-gray-600 rounded">
            {formData.tags.map((tag, tagIndex) => (
              <div className="relative">
                <input
                  type="text"
                  name="tags"
                  placeholder={`Tags ${tagIndex + 1}`}
                  value={tag}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      tags: prev.tags.map((tag, i) =>
                        i === tagIndex ? e.target.value : tag
                      ),
                    }))
                  }
                  className="p-2 w-full bg-gray-700 border-b border-gray-600"
                />
                <span
                  onClick={() => removeTag(tagIndex)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white cursor-pointer"
                >
                  clear
                </span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addTag}
            className="px-2 mt-1 text-sm bg-green-600 text-white hover:bg-green-700 rounded ml-auto"
          >
            Add tag
          </button>
        </>
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default page;

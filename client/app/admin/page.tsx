"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Cookies from "js-cookie";
import ImageInput from "./ImageInput";

function page() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const correctPassword = "Imp3r$al";

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

  const [formData, setFormData] = useState({
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
    tags: [],
  });
  console.log(formData);

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

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
    } catch (err) {
      console.error("Error:", err);
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

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 text-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Create Blog Entry</h2>
      <form className="space-y-4">
        <input
          type="text"
          name="uniqueId"
          placeholder="Unique ID"
          value={formData.uniqueId}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
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
        <input
          type="text"
          name="readTime"
          placeholder="Read Time (e.g. '5 min read')"
          value={formData.readTime}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
        />
        <ImageInput
          image={formData.coverImage}
          addMoreImages={addCoverImage}
          removeImage={removeCoverImage}
          buttonText="Add more Cover Images"
          onChange={(e) => handleFileChange(e, "coverImage")}
        />
        <input
          type="text"
          name="alt"
          placeholder="Image Alt"
          value={formData.alt}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
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
              <input
                type="text"
                name="imgSubtitle"
                placeholder="Image Subtitle"
                value={section.imgSubtitle}
                onChange={(e) => handleChange(e, sectionIndex)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
              />
              <ImageInput
                image={section.image}
                sectionIndex={sectionIndex}
                addMoreImages={addMoreImagesToSection}
                removeImage={removeSectionImage}
                buttonText="Add more section images"
                onChange={(e) => handleFileChange(e, "sections", sectionIndex)}
              />

              <input
                type="text"
                name="subtitle"
                placeholder="Subtitle"
                value={section.subtitle}
                onChange={(e) => handleChange(e, sectionIndex)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
              />

              <input
                type="text"
                name="alt"
                placeholder="Alt Text"
                value={section.alt}
                onChange={(e) => handleChange(e, sectionIndex)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
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
            onClick={addMoreSection}
            className="p-3 bg-blue-600 text-white hover:bg-blue-700 rounded ml-auto mt-4"
          >
            Add more
          </button>
        </div>
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          value={formData.tags}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
        />
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

import {
  Select,
  Option,
  Checkbox,
  Button,
  Radio,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Upload from "../Component/Upload";

const Form = () => {
  const [sections, setSections] = useState([]);
  const [textarea, setTextarea] = useState("");
  const [text, setText] = useState("");

  //   response added into form
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  //   new section add
  const HandleAddSec = () => {
    const newSection = {
      title: "",
      fieldType: "Short Answer",
      options: [],
      response: [],
    };
    setSections([...sections, newSection]);
  };

  //   const changeSelection = (index, selectedOption) => {
  //     const updatedSections = [...sections];
  //     if (selectedOption === "Short Answer") {
  //       updatedSections[index].fieldType = "text";
  //         updatedSections[index].response = [{ label: text }];
  //     } else if (selectedOption === "Paragraph") {
  //       updatedSections[index].fieldType = "textarea";
  //         updatedSections[index].response = [{ label: textarea }];
  //     } else if (selectedOption === "Checkbox") {
  //       updatedSections[index].fieldType = "checkbox";
  //       updatedSections[index].options = [{ label: `New Option` }];
  //     } else if (selectedOption === "Multiple Choice") {
  //       updatedSections[index].fieldType = "radio";
  //       updatedSections[index].options = [{ label: "New Option" }];
  //     } else if (selectedOption === "Dropdown") {
  //       updatedSections[index].fieldType = "select";
  //       updatedSections[index].options = [{ label: "Choose a option" }];
  //     } else if (selectedOption === "File Upload") {
  //       updatedSections[index].fieldType = "file";
  //     } else if (selectedOption === "Date") {
  //       updatedSections[index].fieldType = "date";
  //     } else if (selectedOption === "Time") {
  //       updatedSections[index].fieldType = "time";
  //     } else if (selectedOption === "URL") {
  //       updatedSections[index].fieldType = "url";
  //     }
  //     setSections(updatedSections);
  //   };

  //   section added based on field type selection

  const changeSelection = (index, selectedOption) => {
    const updatedSections = [...sections];
    if (selectedOption === "Short Answer") {
      updatedSections[index].fieldType = "text";
      updatedSections[index].response = [{ label: text }];
    } else if (selectedOption === "Paragraph") {
      updatedSections[index].fieldType = "textarea";
      updatedSections[index].response = [{ label: textarea }];
    } else if (selectedOption === "Checkbox") {
      updatedSections[index].fieldType = "checkbox";
      updatedSections[index].options = [{ label: `New Option` }];
    } else if (selectedOption === "Multiple Choice") {
      updatedSections[index].fieldType = "radio";
      updatedSections[index].options = [{ label: "New Option" }];
    } else if (selectedOption === "Dropdown") {
      updatedSections[index].fieldType = "select";
      updatedSections[index].options = [{ label: "Choose a option" }];
    } else if (selectedOption === "File Upload") {
      updatedSections[index].fieldType = "file";
    } else if (selectedOption === "Date") {
      updatedSections[index].fieldType = "date";
    } else if (selectedOption === "Time") {
      updatedSections[index].fieldType = "time";
    } else if (selectedOption === "URL") {
      updatedSections[index].fieldType = "url";
    }
    setSections(updatedSections);
  };

  //   get short text inputed value

  const handleShortText = (e) => {
    const { value } = e.target;
    console.log(value);
    setText(value);
  };

  //   get long text inputed value

  const handleLongText = (e) => {
    const { value } = e.target;
    console.log(value);
    setTextarea(value);
  };

  //   for form title
  const HandleText = (index, value) => {
    const updatedSections = [...sections];
    updatedSections[index] = {
      ...updatedSections[index],
      title: value,
    };

    setSections(updatedSections);
  };

  //   add new option to checkbox, radio & select

  const addNewOption = (index) => {
    const updatedSections = [...sections];
    updatedSections[index].options.push({ label: `New Option` });
    setSections(updatedSections);
  };

  //   change checkbox, radio & select label namee

  const handleOptionLabelChange = (sectionIndex, optionIndex, value) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].options[optionIndex].label = value;

    setSections(updatedSections);
  };

  //   form submit
  const handleSubmit = () => {
    const formData2 = {
      generalInformation: {
        name: formData.name,
        description: formData.description,
      },
      sections: sections,
    };
    console.log(formData2);
  };

  return (
    <div className="bg-softpurple/20 py-10">
      <div className="max-w-2xl mx-auto   rounded px-4 ">
        <h1 className="uppercase font-bold text-2xl text-white px-10 py-20 bg-softpurple  rounded">
          {" "}
          create your custom Form
        </h1>
        <div id="createform">
          {/* genaral info */}
          <div className="bg-white rounded p-3  mt-2 border-softpurple border-t-4">
            <h1 className="text-2xl font-bold ">Genaral Information</h1>
            {/* Form name */}
            <input
              className="mt-2 w-full text-black border-b border-gray-200  py-2 text-sm  duration-300 focus:outline-none  "
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {/* Form description */}
            <input
              className="mt-2 w-full text-black  border-b border-gray-200 py-2 text-sm duration-300 focus:outline-none "
              type="text"
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          {/* custom info */}

          {sections.map((section, index) => (
            <div
              className="bg-white rounded p-3  mt-2 border-softpurple border-t-4 newFormSection"
              id={`section${index}`}
              key={index}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-between items-center">
                {/* Form name */}
                <input
                  onChange={(e) => HandleText(index, e.target.value)}
                  className="rounded border border-gray-300 w-full mt-2 px-4 py-2 text-black text-sm ring-offset-2 duration-300 focus:outline-none focus:ring-2"
                  type="text"
                  placeholder="Write Title"
                />
                {/* Form field */}

                <Select
                  label="Select Field"
                  onChange={(value) => changeSelection(index, value)}
                  defaultValue={"Short Answer"}
                >
                  <Option value="Short Answer">Short Answer</Option>
                  <Option value="Paragraph">Paragraph</Option>
                  <Option value="Checkbox">Checkbox</Option>
                  <Option value="Multiple Choice">Multiple Choice</Option>
                  <Option value="Dropdown">Dropdown</Option>
                  <Option value="File Upload">File Upload</Option>
                  <Option value="Date">Date</Option>
                  <Option value="Time">Time</Option>
                  <Option value="URL">URL</Option>
                </Select>
              </div>

              {/* for long description */}

              {section.fieldType === "textarea" && (
                <textarea
                  className="rounded border border-gray-300 w-full mt-2 px-4 py-2 text-black text-sm ring-offset-2 duration-300 focus:outline-none focus:ring-2"
                  type="text"
                  rows={4}
                  onChange={handleLongText}
                  placeholder="Write here"
                />
              )}

              {/* for short description */}

              {section.fieldType === "text" && (
                <input
                  className="rounded border border-gray-300 w-full mt-2 px-4 py-2 text-black text-sm ring-offset-2 duration-300 focus:outline-none focus:ring-2"
                  type={sections.fieldType}
                  placeholder="Write here"
                  //   value={text}
                  onChange={handleShortText}
                />
              )}

              {/* for checkbox */}

              {section.fieldType === "checkbox" && (
                <div className="flex flex-col justify-center mt-4 ">
                  {section.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex sm:flex-row flex-col sm:items-center">
                      <Checkbox
                        name={`option-${optionIndex}`}
                        label={option.label}
                        ripple={false}
                        color="indigo"
                        className="h-4 w-4 p-2 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0 text-sm"
                      />
                      <input
                        type="text"
                        className="border-b border-gray-300 py-1 px-2 text-black text-sm focus:outline-none ml-2"
                        placeholder={option.label}
                        onChange={(e) =>
                          handleOptionLabelChange(
                            index,
                            optionIndex,
                            e.target.value
                          )
                        }
                      />
                    </div>
                  ))}
                  <button
                    onClick={() => addNewOption(index)}
                    className="py-1 mt-3 w-fit cursor-pointer rounded duration-100 transition-all px-2 hover:bg-gray-200 text-softpurple font-bold text-sm"
                  >
                    Add new option
                  </button>
                </div>
              )}

              {/* for radio */}

              {section.fieldType === "radio" && (
                <div className="flex flex-col justify-center mt-4 ">
                  {section.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex sm:flex-row flex-col sm:items-center">
                      <Radio
                        name="type"
                        ripple={false}
                        color="indigo"
                        className="h-4 w-4  p-2 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0 text-sm"
                        label={option.label}
                      />

                      <input
                        type="text"
                        className="border-b border-gray-300 py-1 px-2 text-black text-sm focus:outline-none ml-2"
                        placeholder={option.label}
                        onChange={(e) =>
                          handleOptionLabelChange(
                            index,
                            optionIndex,
                            e.target.value
                          )
                        }
                      />
                    </div>
                  ))}
                  <button
                    onClick={() => addNewOption(index)}
                    className="py-1 mt-3 w-fit cursor-pointer rounded duration-100 transition-all px-2 hover:bg-gray-200 text-softpurple font-bold text-sm"
                  >
                    Add new option
                  </button>
                </div>
              )}

              {/* for dropdown */}

              {section.fieldType === "select" && (
                <div className="flex flex-col justify-center mt-4">
                  <Select
                    label="Select Version"
                    defaultValue={section.options[0].label} // Set defaultValue to the label of the first option
                    onChange={(value) => changeSelection(index, value)}
                  >
                    {section.options.map((option, optionIndex) => (
                      <Option value={option.label} key={optionIndex}>
                        {option.label}
                      </Option>
                    ))}
                  </Select>
                  {section.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center mt-1">
                      <span className="text-sm text-gray-600 ml-3">
                        0{optionIndex + 1}.
                      </span>
                      <input
                        type="text"
                        className="border-b border-gray-300 py-1 px-2 text-black text-sm focus:outline-none ml-2"
                        placeholder={option.label}
                        onChange={(e) =>
                          handleOptionLabelChange(
                            index,
                            optionIndex,
                            e.target.value
                          )
                        }
                      />
                    </div>
                  ))}
                  <button
                    onClick={() => addNewOption(index)}
                    className="py-1 mt-2 w-fit cursor-pointer rounded duration-100 transition-all px-2 hover:bg-gray-200 text-softpurple font-bold text-sm"
                  >
                    Add new option
                  </button>
                </div>
              )}

              {/* for file uplaod */}

              {section.fieldType === "file" && (
                <div className="flex flex-col justify-center mt-4 ">
                  <Upload />
                </div>
              )}

              {/* select for date */}

              {section.fieldType === "date" && (
                <input
                  type="date"
                  className="border w-full mt-2  rounded border-gray-300 py-2 px-2 text-black text-sm focus:outline-none"
                  placeholder="Select date"
                />
              )}
              {/* select for time */}
              {section.fieldType === "time" && (
                <input
                  type="time"
                  className="border rounded w-full mt-2 border-gray-300 py-2 px-2 text-black text-sm focus:outline-none"
                  placeholder="Select Time"
                />
              )}

              {/* select for url */}

              {section.fieldType === "url" && (
                <input
                  className="rounded border border-gray-300 w-full mt-2 px-4 py-2 text-black text-sm ring-offset-2 duration-300 focus:outline-none focus:ring-2"
                  type="url"
                  placeholder="Enter URL"
                />
              )}
            </div>
          ))}
        </div>

        <button
          onClick={HandleAddSec}
          className="mt-2 w-full flex justify-center rounded border border-softpurple  p-2 text-lg text-softpurple 500 duration-200 hover:bg-softpurple hover:text-white"
        >
          <FaPlus />
        </button>
        <button
          onClick={handleSubmit}
          className="mt-2 w-full flex justify-center rounded border border-softpurple  p-2 text-softpurple 500 duration-200 hover:bg-softpurple hover:text-white text-sm"
        >
          Submit the form
        </button>
      </div>
    </div>
  );
};

export default Form;

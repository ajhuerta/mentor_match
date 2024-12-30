"use client";

import { FC, useEffect, useRef, useState } from "react";

interface FormData {
  status: string; // Mentor, Mentee, Both
  college: string; // Wilbur Wright College
  ageRange: string; // 18-25, 25-32, 32+, Prefer not to say
  gender: string; // Male, Female, Non-Binary, Prefer not to say
  ethnicity: string; // White, Black, Hispanic/Latinx, Asian, Native American, Pacific Islander, Other
  desiredEducation: string; // Associates, Bachelors, Masters, Ph.D
  fieldOfWork: string; // Mechanical, Electrical, Civil, Software, Chemical
  workType: string; // Academia, Governmental, Non-Profit, Private, Entrepeneurship
  careerStage: string; // Too long to type out
  preferTeamwork: string; // Strongly Disagree (SD), Disagree (D), Not sure (N), Agree (A), Strongly Agree (SA)
  preferRide: string; // Listening to music, Listening to a podcast, Thinking about responsibilities, I depise driving
  preferLocation: string; // Location best for family, Location with balance for family and career, Location for career, Location I enjoy
  workGoal: string; // tToo long to type out
}

const SurveyForm: FC = ({}) => {
  const [userData, setUserData] = useState<FormData>({
    status: "",
    college: "",
    ageRange: "",
    gender: "",
    ethnicity: "",
    desiredEducation: "",
    fieldOfWork: "",
    workType: "",
    careerStage: "",
    preferTeamwork: "",
    preferRide: "",
    preferLocation: "",
    workGoal: "",
  });

  return (
    <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
      <h1 className="text-3xl font-medium mb-4">Matching Survey</h1>
      <h2 className="text-md font-small mb-4 ">
        Answer the questions below to match with with the perfect Mentor/Mentee
        🚀
      </h2>
      <h3 className="text-xl font-medium mb-4 pt-5">Personal Information</h3>
      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            What role are you looking to fill?
          </label>
          <select
            id="role"
            name="role"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          >
            <option value=""></option>
            <option value="Mentor">Mentor</option>
            <option value="Mentee">Mentee</option>
            {/* <option value="other">Other</option> */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
            Which institution are you part of?
          </label>
          <select
            id="college"
            name="college"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          >
            <option value=""></option>
            <option value="Wilbur Wright College">Wilbur Wright College</option>
            <option value="University of Illinois at Urbana-Champaign">
              University of Illinois at Urbana-Champaign
            </option>
            <option value="Illinois Institute of Technology">
              Illinois Institute of Technology
            </option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
            Which age range do you fall under?
          </label>
          <select
            id="age"
            name="age"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          >
            <option value=""></option>
            <option value="18-25">18-25</option>
            <option value="25-32">25-32</option>
            <option value="33+">33+</option>
            <option value="prefer not to say">prefer not to say</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            What gender do you identify with?
          </label>
          <select
            id="gender"
            name="gender"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          >
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
           What is your ethnicity?
          </label>
          <select
            id="ethnicity"
            name="ethnicity"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          >
            <option value=""></option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Hispanic/Latinx">Hispanic/Latinx</option>
            <option value="Asian">Asian</option>
            <option value="Native American">Native American</option>
            <option value="Pacific Islander">Pacific Islander</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
           What the highest level you have obtained or desire to obtain?
          </label>
          <select
            id="education"
            name="education"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          >
            <option value=""></option>
            <option value="Associate">Associate</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
            <option value="Ph.D">Ph.d</option>
          </select>
        </div>
        <h3 className="text-xl font-medium mb-4 pt-5">Career / Education</h3>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
           Which best represents of these best represents the field you work in currently / aspire to?
          </label>
          <select 
            id="fieldOfWork"
            name="fieldOfWork"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          >
            <option value=""></option>
            <option value="Mechanical">Mechanical</option>
            <option value="Electrical">Electrical</option>
            <option value="Civil">Civil</option>
            <option value="Software">Software</option>
            <option value="Chemical">Chemical</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            What is your favorite color?
          </label>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/3">
              <label
                htmlFor="color-red"
                className="block text-gray-700 font-medium mb-2"
              >
                <input
                  type="radio"
                  id="color-red"
                  name="color"
                  value="red"
                  className="mr-2"
                />
                Red
              </label>
            </div>
            <div className="px-2 w-1/3">
              <label
                htmlFor="color-blue"
                className="block text-gray-700 font-medium mb-2"
              >
                <input
                  type="radio"
                  id="color-blue"
                  name="color"
                  value="blue"
                  className="mr-2"
                />
                Blue
              </label>
            </div>
            <div className="px-2 w-1/3">
              <label
                htmlFor="color-green"
                className="block text-gray-700 font-medium mb-2"
              >
                <input
                  type="radio"
                  id="color-green"
                  name="color"
                  value="green"
                  className="mr-2"
                />
                Green
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            What is your favorite animal?
          </label>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/3">
              <label
                htmlFor="animal-cat"
                className="block text-gray-700 font-medium mb-2"
              >
                <input
                  type="checkbox"
                  id="animal-cat"
                  name="animal[]"
                  value="cat"
                  className="mr-2"
                />
                Cat
              </label>
            </div>
            <div className="px-2 w-1/3">
              <label
                htmlFor="animal-dog"
                className="block text-gray-700 font-medium mb-2"
              >
                <input
                  type="checkbox"
                  id="animal-dog"
                  name="animal[]"
                  value="dog"
                  className="mr-2"
                />
                Dog
              </label>
            </div>
            <div className="px-2 w-1/3">
              <label
                htmlFor="animal-bird"
                className="block text-gray-700 font-medium mb-2"
              >
                <input
                  type="checkbox"
                  id="animal-bird"
                  name="animal[]"
                  value="bird"
                  className="mr-2"
                />
                Bird
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            rows={5}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SurveyForm;

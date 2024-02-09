import Navbar from "../Navbar/navbar";
import CausesField from "../PreferencesForm/causes-field";

export default function CreateActivity() {
  return (
    <>
      <Navbar />
      <form className="px-20 py-10">
        <div className="space-y-12">
          <div className>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="activityname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name of Volunteering Activity
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="activityname"
                    id="activityname"
                    className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Project Description
                </label>
                <div className="mt-2">
                  <textarea
                    name="description"
                    id="description"
                    rows="5"
                    className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="requirements"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Volunteer Requirements
                </label>
                <div className="mt-2">
                  <textarea
                    name="requirements"
                    id="requirements"
                    rows="5"
                    className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="causes"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Causes
                </label>
                <div className="w-1/2">
                  <CausesField />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="schedule"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Schedule
                </label>
                <div className="mt-2">
                  <textarea
                    name="schedule"
                    id="schedule"
                    rows="4"
                    className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="organiser"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Organiser
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="organiser"
                    id="organiser"
                    className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="poc-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name of Contact Person
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="poc-name"
                    id="poc-name"
                    className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="poc-contact"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mobile of Contact Person
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="poc-contact"
                    id="poc-contact"
                    className="block w-1/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="poc-email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email of Contact Person
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="poc-email"
                    id="poc-email"
                    className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Location
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="location"
                    id="location"
                    className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="vacancies"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Vacancies
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="vacancies"
                    id="vacancies"
                    className="block w-1/8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-orange-red/80 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-red/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create new activity
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

import CausesField from "./causes-field";
import SkillsField from "./skills-field";

export default function PreferencesForm() {
  return (
    <form>
      <div className="space-y-12">
        <div className>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="causes"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Interested Causes 
              </label>
              <div className="w-1/2">
              <CausesField />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="skills"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Skills 
              </label>
              <div className="w-1/2">
              <SkillsField />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="primary-lang"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Primary language
              </label>
              <div className="mt-2">
                <select
                  type="lang"
                  name="primary-lang"
                  id="primary-lang"
                  className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="primary-lang-spoken"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Language Proficiency (Spoken)
              </label>
              <div className="mt-2">
                <select
                  id="primary-lang-spoken"
                  name="primary-lang-spoken"
                  className="block w-1/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Basic</option>
                  <option>Intermediate</option>
                  <option>Professional</option>
                  <option>Native</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="primary-lang-written"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Language Proficiency (Written)
              </label>
              <div className="mt-2">
                <select
                  id="primary-lang-written"
                  name="primary-lang-written"
                  className="block w-1/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Basic</option>
                  <option>Intermediate</option>
                  <option>Professional</option>
                  <option>Native</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="secondary-lang"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Secondary language
              </label>
              <div className="mt-2">
                <select
                  type="lang"
                  name="secondary-lang"
                  id="secondary-lang"
                  className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="secondary-lang-spoken"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Language Proficiency (Spoken)
              </label>
              <div className="mt-2">
                <select
                  id="secondary-lang-spoken"
                  name="secondary-lang-spoken"
                  className="block w-1/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Basic</option>
                  <option>Intermediate</option>
                  <option>Professional</option>
                  <option>Native</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="primary-lang-written"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Language Proficiency (Written)
              </label>
              <div className="mt-2">
                <select
                  id="secondary-lang-written"
                  name="secondary-lang-written"
                  className="block w-1/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Basic</option>
                  <option>Intermediate</option>
                  <option>Professional</option>
                  <option>Native</option>
                </select>
              </div>
            </div>
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-red/80 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-red/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

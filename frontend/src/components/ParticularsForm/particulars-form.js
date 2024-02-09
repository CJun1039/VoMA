import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
// import { post } from "../../../../backend/src/auth";

export default function ParticularsForm(props) {
  const { data } = props;
  return (
    <form>
      <div className="space-y-12">
        <div className="pb-4">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder={data.firstName}
                  readOnly
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  autoComplete="family-name"
                  placeholder={data.lastName}
                  readOnly
                  className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  readOnly
                  placeholder={data.email}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="mobile"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mobile number
              </label>
              <div className="mt-2">
                <input
                  id="mobile"
                  name="mobile"
                  placeholder={data.mobileNumber}
                  type="tel"
                  className="block w-1/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  className="block w-1/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option selected={data.gender === "Male" ? "Selected" : ""}>
                    Male
                  </option>
                  <option selected={data.gender === "Female" ? "Selected" : ""}>
                    Female
                  </option>
                  <option
                    selected={data.gender === "NonBinary" ? "Selected" : ""}
                  >
                    Non-binary
                  </option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="dob"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date of birth
              </label>
              <div className="mt-2">
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  className="block w-1/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:max-w-xs sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="nric"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                NRIC/FIN
              </label>
              <div className="mt-2">
                <input
                  id="nric"
                  name="nric"
                  type="text"
                  className="block w-1/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="residential"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Residential status
              </label>
              <div className="mt-2">
                <select
                  id="residential"
                  name="gender"
                  className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Singaporean</option>
                  <option>Permanent Resident (PR)</option>
                  <option>Foreigner</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="emergency-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Emergency contact name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="emergency-name"
                  id="emergency-name"
                  className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="emergency-number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Emergency contact number
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="emergency-number"
                  id="emergency-number"
                  className="block w-1/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="emergency-relationship"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Emergency contact relationship
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="emergency-relationship"
                  id="emergency-relationship"
                  className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-red/80 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

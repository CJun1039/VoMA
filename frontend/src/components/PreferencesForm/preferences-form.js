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
                >
                  <option selected disabled>Choose a language</option>
                  <option value="EN">English</option>
                  <option value="ZH">Chinese (Mandarin)</option>
                  <option value="MS">Malay</option>
                  <option value="TA">Tamil</option>
                  <option value="HI">Hindi</option>
                  <option value="PA">Punjabi</option>
                  <option value="AF">Afrikaans</option>
                  <option value="SQ">Albanian</option>
                  <option value="AR">Arabic</option>
                  <option value="HY">Armenian</option>
                  <option value="EU">Basque</option>
                  <option value="BN">Bengali</option>
                  <option value="BG">Bulgarian</option>
                  <option value="CA">Catalan</option>
                  <option value="KM">Cambodian</option>
                  <option value="HR">Croatian</option>
                  <option value="CS">Czech</option>
                  <option value="DA">Danish</option>
                  <option value="NL">Dutch</option>
                  <option value="ET">Estonian</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finnish</option>
                  <option value="FR">French</option>
                  <option value="KA">Georgian</option>
                  <option value="DE">German</option>
                  <option value="EL">Greek</option>
                  <option value="GU">Gujarati</option>
                  <option value="HE">Hebrew</option>
                  <option value="HU">Hungarian</option>
                  <option value="IS">Icelandic</option>
                  <option value="ID">Indonesian</option>
                  <option value="GA">Irish</option>
                  <option value="IT">Italian</option>
                  <option value="JA">Japanese</option>
                  <option value="JW">Javanese</option>
                  <option value="KO">Korean</option>
                  <option value="LA">Latin</option>
                  <option value="LV">Latvian</option>
                  <option value="LT">Lithuanian</option>
                  <option value="MK">Macedonian</option>
                  <option value="ML">Malayalam</option>
                  <option value="MT">Maltese</option>
                  <option value="MI">Maori</option>
                  <option value="MR">Marathi</option>
                  <option value="MN">Mongolian</option>
                  <option value="NE">Nepali</option>
                  <option value="NO">Norwegian</option>
                  <option value="FA">Persian</option>
                  <option value="PL">Polish</option>
                  <option value="PT">Portuguese</option>
                  <option value="QU">Quechua</option>
                  <option value="RO">Romanian</option>
                  <option value="RU">Russian</option>
                  <option value="SM">Samoan</option>
                  <option value="SR">Serbian</option>
                  <option value="SK">Slovak</option>
                  <option value="SL">Slovenian</option>
                  <option value="ES">Spanish</option>
                  <option value="SW">Swahili</option>
                  <option value="SV">Swedish </option>
                  <option value="TT">Tatar</option>
                  <option value="TE">Telugu</option>
                  <option value="TH">Thai</option>
                  <option value="BO">Tibetan</option>
                  <option value="TO">Tonga</option>
                  <option value="TR">Turkish</option>
                  <option value="UK">Ukrainian</option>
                  <option value="UR">Urdu</option>
                  <option value="UZ">Uzbek</option>
                  <option value="VI">Vietnamese</option>
                  <option value="CY">Welsh</option>
                  <option value="XH">Xhosa</option>
                </select>
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
                >
                  <option selected disabled>Choose a language</option>
                  <option value="EN">English</option>
                  <option value="ZH">Chinese (Mandarin)</option>
                  <option value="MS">Malay</option>
                  <option value="TA">Tamil</option>
                  <option value="HI">Hindi</option>
                  <option value="PA">Punjabi</option>
                  <option value="AF">Afrikaans</option>
                  <option value="SQ">Albanian</option>
                  <option value="AR">Arabic</option>
                  <option value="HY">Armenian</option>
                  <option value="EU">Basque</option>
                  <option value="BN">Bengali</option>
                  <option value="BG">Bulgarian</option>
                  <option value="CA">Catalan</option>
                  <option value="KM">Cambodian</option>
                  <option value="HR">Croatian</option>
                  <option value="CS">Czech</option>
                  <option value="DA">Danish</option>
                  <option value="NL">Dutch</option>
                  <option value="ET">Estonian</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finnish</option>
                  <option value="FR">French</option>
                  <option value="KA">Georgian</option>
                  <option value="DE">German</option>
                  <option value="EL">Greek</option>
                  <option value="GU">Gujarati</option>
                  <option value="HE">Hebrew</option>
                  <option value="HU">Hungarian</option>
                  <option value="IS">Icelandic</option>
                  <option value="ID">Indonesian</option>
                  <option value="GA">Irish</option>
                  <option value="IT">Italian</option>
                  <option value="JA">Japanese</option>
                  <option value="JW">Javanese</option>
                  <option value="KO">Korean</option>
                  <option value="LA">Latin</option>
                  <option value="LV">Latvian</option>
                  <option value="LT">Lithuanian</option>
                  <option value="MK">Macedonian</option>
                  <option value="ML">Malayalam</option>
                  <option value="MT">Maltese</option>
                  <option value="MI">Maori</option>
                  <option value="MR">Marathi</option>
                  <option value="MN">Mongolian</option>
                  <option value="NE">Nepali</option>
                  <option value="NO">Norwegian</option>
                  <option value="FA">Persian</option>
                  <option value="PL">Polish</option>
                  <option value="PT">Portuguese</option>
                  <option value="QU">Quechua</option>
                  <option value="RO">Romanian</option>
                  <option value="RU">Russian</option>
                  <option value="SM">Samoan</option>
                  <option value="SR">Serbian</option>
                  <option value="SK">Slovak</option>
                  <option value="SL">Slovenian</option>
                  <option value="ES">Spanish</option>
                  <option value="SW">Swahili</option>
                  <option value="SV">Swedish </option>
                  <option value="TT">Tatar</option>
                  <option value="TE">Telugu</option>
                  <option value="TH">Thai</option>
                  <option value="BO">Tibetan</option>
                  <option value="TO">Tonga</option>
                  <option value="TR">Turkish</option>
                  <option value="UK">Ukrainian</option>
                  <option value="UR">Urdu</option>
                  <option value="UZ">Uzbek</option>
                  <option value="VI">Vietnamese</option>
                  <option value="CY">Welsh</option>
                  <option value="XH">Xhosa</option>
                </select>
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

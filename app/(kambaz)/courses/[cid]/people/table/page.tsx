import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Tony Stark
            </td>
            <td className="p-2">001234561S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-10-01</td>
            <td className="p-2">10:21:32</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Bruce Wayne
            </td>
            <td className="p-2">001234562S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-11-02</td>
            <td className="p-2">23:32:23</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Steve Rogers
            </td>
            <td className="p-2">001234563S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-10-02</td>
            <td className="p-2">13:21:32</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Natasha Romanoff
            </td>
            <td className="p-2">001234564S</td>
            <td className="p-2">S101</td>
            <td className="p-2">TA</td>
            <td className="p-2">2020-11-05</td>
            <td className="p-2">11:22:33</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Sherlock Holmes
            </td>
            <td className="p-2">001234565S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-11-10</td>
            <td className="p-2">09:15:42</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Hercule Poirot
            </td>
            <td className="p-2">001234566S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-11-12</td>
            <td className="p-2">14:05:11</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Nancy Drew
            </td>
            <td className="p-2">001234567S</td>
            <td className="p-2">S101</td>
            <td className="p-2">TA</td>
            <td className="p-2">2020-11-14</td>
            <td className="p-2">18:44:09</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Jane Sample
            </td>
            <td className="p-2">001234568S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-12-01</td>
            <td className="p-2">08:30:00</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Alex Sample
            </td>
            <td className="p-2">001234569S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-12-02</td>
            <td className="p-2">12:45:30</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Sam Sample
            </td>
            <td className="p-2">001234570S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-12-03</td>
            <td className="p-2">16:20:15</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

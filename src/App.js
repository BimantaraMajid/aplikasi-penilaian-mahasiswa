import './App.css';
import {useState} from "react";

function App() {
  const createData = Array(10)
    .fill(null)
    .map((val, index) => ({
      nama: `mahasiswa_${index + 1}`,
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    }));
  const [data, setData] = useState([...createData]);
  const [resultData, setResultData] = useState('');

  const handleInputChange = (event, index) => {
    const {name, value} = event.target;
    const newData = [...data];
    newData[index][name] = value;
    setData(newData);
  };

  const handleSave = () => {
    const result = {};
    const keysAspek = Object.keys(data[0]);
    keysAspek.shift();

    keysAspek.forEach((aspek) => {
      result[aspek] = {};
    });

    data.forEach((mahasiswa) => {
      keysAspek.forEach((aspek) => {
        result[aspek][mahasiswa.nama] = mahasiswa[aspek];
      });
    });

    console.log(result);
    setResultData(`${JSON.stringify(result, null, 4)}`);
  };

  return (
    <div className="App">
      <h1>Aplikasi Penilaian Mahasiswa</h1>
      <table className="table-penilaian" border='2'>
        <thead>
        <tr>
          <th></th>
          <th>Aspek Penilaian 1</th>
          <th>Aspek Penilaian 2</th>
          <th>Aspek Penilaian 3</th>
          <th>Aspek Penilaian 4</th>
        </tr>
        </thead>
        <tbody>
        {
          data.map((mahasiswa, idx) => (
            <tr key={idx}>
              <td>{mahasiswa.nama}</td>
              <td>
                <input
                  type="number"
                  value={mahasiswa.aspek_penilaian_1}
                  name="aspek_penilaian_1"
                  min={1}
                  max={10}
                  onChange={(event) => handleInputChange(event, idx)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={mahasiswa.aspek_penilaian_2}
                  name="aspek_penilaian_2"
                  min={1}
                  max={10}
                  onChange={(event) => handleInputChange(event, idx)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={mahasiswa.aspek_penilaian_3}
                  name="aspek_penilaian_3"
                  min={1}
                  max={10}
                  onChange={(event) => handleInputChange(event, idx)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={mahasiswa.aspek_penilaian_4}
                  name="aspek_penilaian_4"
                  min={1}
                  max={10}
                  onChange={(event) => handleInputChange(event, idx)}
                />
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
      <button onClick={handleSave}>Simpan</button>

      <pre>result : <code>{resultData}</code></pre>
    </div>
  );
}

export default App;

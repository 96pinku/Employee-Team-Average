import React, { useState } from 'react'; 
const employeesData = [
  { name: 'Pinku', age: 24 },
  { name: 'Nidhi Goel', age: 23 },
  { name: 'Akhil', age: 22 },
  { name: 'Ayush', age: 20 },
  { name: 'Krishna', age: 21 },
  { name: 'Shivam', age: 25 },
];

function Employees() {
  const [employees, setEmployees] = useState(employeesData);
  const [team, setTeam] = useState([]);

  const addToTeam = (employee) => {
    if (!team.includes(employee)) {
      setTeam([...team, employee]);
    }
  };

  const removeFromTeam = (employee) => {
    setTeam(team.filter((member) => member !== employee));
  };

  const sortByAge = () => {
    const sortedTeam = [...team].sort((a, b) => a.age - b.age);
    setTeam(sortedTeam);
  };

  const averageAge = () => {
    if (team.length === 0) return 0;
    const totalAge = team.reduce((total, member) => total + member.age, 0);
    return (totalAge / team.length).toFixed(1);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      {/* Employees List */}
      <div style={{ border: '10px solid black', padding: '10px', width: '200px' }}>
        <h2>EMPLOYEES</h2>
        {employees.map((employee) => (
          <div
            key={employee.name}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              background: team.includes(employee) ? 'gray' : 'white',
              padding: '10px',
              marginBottom: '5px',
            }}
          >
            <span>{employee.name}</span>
            <span>{employee.age}</span>
            <button
              onClick={() => addToTeam(employee)}
              disabled={team.includes(employee)}
              style={{ background: 'blue', color: 'white' }}
            >
              ADD
            </button>
          </div>
        ))}
      </div>

      {/* Team List */}
      <div style={{ border: '10px solid black', padding: '10px', width: '200px' }}>
        <h2>TEAM</h2>
        <button onClick={sortByAge} style={{ background: 'yellow', marginBottom: '20px'}}>
          Sort by Age
        </button>
        {team.map((member) => (
          <div
            key={member.name}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px',
              marginBottom: '5px',
            }}
          >
            <span>{member.name}</span>
            <span>{member.age}</span>
            <button onClick={() => removeFromTeam(member)} style={{ background: 'blue', color: 'white' }}>
              REMOVE
            </button>
          </div>
        ))}
        <div style={{ padding: '10px', background: 'gray', marginTop: '10px' }}>
          <strong>Average Age</strong>: {averageAge()}
        </div>
      </div>
    </div>
  );
}

export default Employees;

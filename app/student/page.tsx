
export default async function Home() {
   const response = await fetch("https://690d4089a6d92d83e850e774.mockapi.io/principal/student ")
 const listStudent = await response.json();

    console.log(listStudent)
    const rows = [];
    for (const students of listStudent) {
        rows.push(<tr key={students.id}>
            <td>{students.id}</td>
            <td>{students.email}</td>
            <td>{students.name}</td>
        </tr>
        )
    }

  return (
    <>
   <h1>Lista de Estudantes</h1>
    <table border={3}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>NomeAluno</th>
                        <th>Email</th>
                    </tr>

                </thead>

                <tbody>
                    {rows}
                </tbody>

            </table>
    </>
    
  );
}

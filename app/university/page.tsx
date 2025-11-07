export default async function university() {

    const response = await fetch("https://690d4089a6d92d83e850e774.mockapi.io/principal")

    const listUniversity = await response.json();

    console.log(listUniversity)

    const rows = [];
    for (const university of listUniversity) {
        rows.push(<tr key={university.id}>
            <td>{university.id}</td>
            <td>{university.abbreviation}</td>
            <td>{university.name}</td>
        </tr>
        )
    }

    return (
        <div>
            <br></br>
            <h1>Lista de Universidades</h1>

            <table border={3}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Abraviação</th>
                        <th>Nome</th>
                    </tr>

                </thead>

                <tbody>
                    {rows}
                </tbody>

            </table>

        </div>

    )
}
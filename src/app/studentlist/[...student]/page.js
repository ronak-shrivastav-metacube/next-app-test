export default async function Student({params}) { 
    console.log(params);
    const studentData = (await params).student
    return(
        <div>Student Details: {studentData[1]}</div>
    )
}
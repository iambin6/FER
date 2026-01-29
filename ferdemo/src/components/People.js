function People() {
  let numbers = [1, 2, 3, 4, 5];
  let names = ["An", "Tình", "Mi", "lung"];
  const people = [

    { id: 1, name: "Ann", age: 20 },
    { id: 2, name: "Bình", age: 22 },
    { id: 3, name: "Chi", age: 19 },
    { id: 4, name: "Dung", age: 21 },
    { id: 5, name: "Hải", age: 23 },
    { id: 6, name: "Hương", age: 20 },
    { id: 7, name: "Khánh", age: 24 },
    { id: 8, name: "Lan", age: 22 },
    { id: 9, name: "Minh", age: 13 },
    { id: 10, name: "Tuấn", age: 16 }
  ];

  const sum = numbers.reduce((acc, val) => acc + val, 0);
  const sortedPeople = [...names].sort();
  const teenagers = people.filter(
    (person) => person.age >= 13 && person.age <= 19
  );
  const totalAge = people.reduce((acc, person) => acc + person.age, 0);
  const averageAge = (totalAge / people.length).toFixed(2);
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="text-center mb-4 border-bottom pb-2">📊 Thống kê & Danh sách</h2>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-header bg-info text-white text-center">
              <h3 className="h5 mb-0">Danh sách số nguyên</h3>
            </div>
            <div className="card-body p-0">
              <ul className="list-group list-group-flush">
                {numbers.map((n, index) => (
                  <li key={index} className="list-group-item text-center">{n}</li>
                ))}
              </ul>
            </div>
            <div className="card-footer bg-light">
              <p className="mb-1 small text-dark"><strong>Tổng:</strong> {sum}</p>
              <p className="mb-0 small text-dark"><strong>Số lượng:</strong> {numbers.length}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-header bg-secondary text-white text-center">
              <h3 className="h5 mb-0">Danh sách tên (A-Z)</h3>
            </div>
            <div className="card-body p-0">
              <ul className="list-group list-group-flush">
                {sortedPeople.map((name, index) => (
                  <li key={index} className="list-group-item">{name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-header bg-warning text-dark text-center">
              <h3 className="h5 mb-0">Thiếu niên (13-19 tuổi)</h3>
            </div>
            <div className="card-body p-0">
              <ul className="list-group list-group-flush">
                {teenagers.map((person) => (
                  <li key={person.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <span>{person.name}</span>
                    <span className="badge bg-primary rounded-pill">{person.age}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-footer bg-light text-center font-weight-bold text-dark">
              Trung bình tuổi: {averageAge}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default People;
function AddTodo() {
    return (
        <div class="container text-center">
            <div class="row kg-row">
                <div class="col-4">
                    <input type="text" placeholder="Enter Todo List"></input>
                </div>
                <div class="col-4">
                    <input type="date"></input>
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-success kg-button">ADD</button>
                </div>
            </div>
        </div>
    );
}
export default AddTodo;
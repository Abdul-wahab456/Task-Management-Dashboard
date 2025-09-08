import "./TaskCard.css";
 
export default function Navbar(){
    return(
        <div>
            <h1>Task Dashboard</h1>
            <h5>Manage your task Efficiently</h5>
            <div className="box_task_card">
                <div class="input-group">
                    <div className="field">
                        <label for="Title">Title</label>
                        <input type="text" id="Title" class="task_input" placeholder="..." />
                    </div>
                    <div className="field">

                        <label for="Category">Category</label>
                        <input type="text" id="Category" class="task_input" placeholder="..." />
                    </div>
                      <div class="field description">
                        <label for="Description">Description</label>
                        <textarea id="Description" class="task_input" placeholder="..."></textarea>
                    </div>

                    <div class="field date">
                        <label for="Date">Date</label>
                        <input type="date" id="Date" class="task_input" />
                    </div>
                    <div class="field add-task">
                        <br/>
                        <button class="task_button">Add Task</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
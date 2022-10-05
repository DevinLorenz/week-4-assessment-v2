const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const addComplimentBtn = document.getElementById("addComplimentButton");
const addFortuneBtn = document.getElementById("addFortuneButton");

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getAllCompliments = (e) => {
    e.preventDefault()
    axios.get("http://localhost:4000/api/compliment/all")
        .then(res => {
            const data = res.data;
            
            const complimentList = document.querySelector(".compliment-list");
            data.forEach(compliment => {
                
                const compCard = document.createElement("div");
                complimentList.appendChild(compCard);
                compCard.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                        <button class="btn-delete" onclick="deleteCompliment('${compliment}')">Delete</button>
                            <h5>${compliment}</h5>
                            </div>
                    </div>
                    
                    `;

        });
    });
};

const getAllFortunes = (e) => {
    axios.get("http://localhost:4000/api/fortune/all")
        .then(res => {
            const data = res.data;
            const fortuneList = document.querySelector(".fortune-list");
            data.forEach(fortune => {
                
                const fortCard = document.createElement("div");
                fortuneList.appendChild(fortCard);
                fortCard.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                        <button class="btn-delete" onclick="deleteFortune('${fortune}')">Delete</button>
                            <h5>${fortune}</h5>
                            </div>
                    </div>
                    
                    `;

        });
    });
};



const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
}

const addCompliment = () => {
    
    const newCompliment = document.getElementById("newCompliment").value;
    axios.post("http://localhost:4000/api/compliment/add", { newCompliment })
        .then(res => {
            const data = res.data;
            console.log(data);
            getAllCompliments();
    });
};

const addFortune = (e) => {
    e.preventDefault()
    const newFortune = document.getElementById("newFortune").value;
    axios.post("http://localhost:4000/api/fortune/add", { newFortune })
        .then(res => {
            const data = res.data;
            console.log(data);
            getAllFortunes();
    });
};

const deleteCompliment = (compliment) => {
    axios.delete("http://localhost:4000/api/compliment/delete", { data: { compliment } })
        .then(res => {
            const data = res.data;
            console.log(data);
            window.location.reload();
    });
};

const deleteFortune = (fortune) => {
    axios.delete("http://localhost:4000/api/fortune/delete", { data: { fortune } })
        .then(res => {
            const data = res.data;
            console.log(data);
            window.location.reload();
    });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addComplimentBtn.addEventListener('click', addCompliment)
addFortuneBtn.addEventListener('click', addFortune)
window.addEventListener('load', getAllCompliments)
window.addEventListener('load', getAllFortunes)

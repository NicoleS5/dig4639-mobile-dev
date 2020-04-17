import React from "react";
import "./index.css";

const newContact = ({ loadAgain }) => {

    const addContact = async (event) => {
        event.preventDefault();

        const name = document.getElementById("addName").value;
        const number = document.getElementById("addNumber").value;
        try {
            await window.fetch("http://plato.mrl.ai:8080/contacts/add", {
                method: "POST",
                headers: {
                    api: "sommer",
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    number: number
                })
            })
            loadAgain()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div class="form">
            <h2>Create a New Contact:</h2>
            <form method="POST">
                <div>
                    <input required="required" id="addName" type="text" placeholder="Enter Name" />
                    <input required="required" id="addNumber" type="text" placeholder="Enter Number" />
                    <button className="button" type="submit" onClick={addContact}>Create Contact</button>
                </div>
            </form>
        </div>
    );
}

export default newContact;
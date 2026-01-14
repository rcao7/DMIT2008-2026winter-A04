/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/

// 1. Select topic & new topic form.
let topicList = document.querySelector(".topics-list");
let newTopicForm = document.querySelector(".new-topic-form");

// 5. Create function addTopicToPage that will take the topic name and the topic list element as a paramater.
const addTopicToPage = (topicName, topicListElement) => {
    let newTopicElement = `<li class="list-group-item">
        ${topicName}
        </li>`
    topicListElement = newTopicElement
}

// 2. Add event listener
newTopicForm.AddEventListener (
    'submit',
    (event) => { 
        event.preventDefault()

        // 3. grab input element & extract/store value.
        let topicInput = event.target.elements["new-topic"]
        let newTopic = topicInput.value
        console.log(newTopic)

        // 4. validation - check for empty, use bootstrap classes.
        if (newTopic === "") {
            topicInput.classList.add("is-invalid")
        } else {
            topicInput.classList.remove("is-invalid")
        }
    }
)


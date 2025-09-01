# JavaScript Interview Notes

## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`

- **`getElementById("id")`**  
  - Finds **one element** with the given `id`.  
  - Returns a single element (or `null` if not found).

- **`getElementsByClassName("class")`**  
  - Finds **all elements** with that class.  
  - Returns an **HTMLCollection** (live, updates automatically).  
  - Use `[0]` to pick one element.

- **`querySelector("selector")`**  
  - Finds the **first element** that matches a CSS selector (`.class`, `#id`, `div p`, etc.).  
  - Returns a single element.

- **`querySelectorAll("selector")`**  
  - Finds **all elements** that match a CSS selector.  
  - Returns a **NodeList** (static, does not auto-update).  

---

## 2. How to Create and Insert a New Element into the DOM

```javascript
let newDiv = document.createElement("div");   // create element
newDiv.textContent = "Hello World";           // add text/content
document.body.appendChild(newDiv);            // insert into page
```
querySelectorAll("selector")  
  - Finds **all elements** that match a CSS selector.  
  - Returns a **NodeList** (static, does not auto-update).  


 **`Other useful methods:`**

**append()** → add inside element

**prepend()** → add at the start

**before() / after()** → insert outside relative to element

## 3. Event Bubbling

**Definition:** When an event happens on a child element, it first runs its own handler, then goes upward through parent elements until it reaches the **`document`**.

Example:
Clicking a button inside a **`div`** → event fires on the button → then the **`div`** → then body → then **`document`**. 


## 4. Event Delegation

**Definition:** Instead of adding event listeners to many child elements, put one listener on their parent and check the event target.

```javascript
document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
```

**Why useful?**

- ✅ Fewer event listeners → better performance

- ✅ Works even for dynamically added elements


## 5. preventDefault() vs stopPropagation()

- preventDefault()

**` Stops the default browser action.`**


- stopPropagation()

**`Stops the event from bubbling up (or going down in capture).`**
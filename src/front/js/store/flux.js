const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      employees: [],
      currentEmployee: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      getAllEmployees: async () => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/employees");
          const data = await resp.json();
          setStore({ employees: data });
          console.log(getStore().employees);
          return data;
        } catch (error) {
          console.log("Error occurred while fetching employee records", error);
        }
      },
      getEmployeeByID: async (id) => {
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/employees/" + id
          );
          const data = await resp.json();
          // setStore({ currentEmployee: data });
          // console.log(currentEmployee);
          return data;
        } catch (error) {
          console.log("Error occurred while retrieving employee record", error);
        }
      },
      createEmployee: async (first_name, last_name, email, phone_number) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/employees", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              first_name,
              last_name,
              email,
              phone_number,
            }),
          });
          if (resp.ok) {
            alert("Employee Record Created successfully!");
            return true;
          }
        } catch (error) {
          console.log("Error occurred while creating new employee", error);
        }
      },
      updateEmployee: async (
        id,
        first_name,
        last_name,
        email,
        phone_number
      ) => {
        const resp = await fetch(
          process.env.BACKEND_URL + "/api/employees/" + id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              first_name,
              last_name,
              email,
              phone_number,
            }),
          }
        );

        if (resp.success) {
          console.log(resp.response);
          alert("Employee Record updated successfully");
          return true;
        } else {
          console.log(
            "Failed to update employee record",
            resp.error,
            resp.response
          );
        }
      },
      deleteEmployee: async (id) => {
        try {
          await fetch(process.env.BACKEND_URL + "/api/employees/" + id, {
            method: "DELETE",
          });
        } catch (error) {
          console.log("Could not delete record", error);
        }
        window.location.reload(false);
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;

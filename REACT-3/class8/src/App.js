
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link, useRoutes, NavLink } from "react-router-dom";
import { Home } from "./components/Home";
import { BookList } from "./components/BookList";
import { Book } from "./components/Book";
import { NewBook } from "./components/NewBook";
import { NotFound } from "./components/NotFound";
import { BookLayout } from "./components/BookLayout";
import "./css/style.css";

function App() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/books",
      element: <BookLayout />,
      children: [
        {
          index: true,
          element: <BookList />,
        },
        {
          path: ":id",
          element: <Book />,
        },
        {
          path: "new",
          element: <NewBook />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      {/* 
      We can have multiple routes with the same path
      <Routes>
        <Route path="/books" element={<h1>Some Extra content</h1>} />
      </Routes> */}
      <nav>
        <ul>
          {/* 
          This is not recommended since it refreshes the page
          <li>
            <a href="/">Home anchor</a>
          </li> */}
          <li>
            {/* <Link to="/" replace>
              Home
            </Link> */}
            {/* <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : { color: "blue" };
              }}
              to="/"
            >
              Home
            </NavLink> */}
            <NavLink to="/">Home</NavLink>
          </li>
          {/* <li>
            <a href="/books">Books anchor</a>
          </li> */}
          <li>
            {/* <Link to="/books">Books</Link> */}
            {/* <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : { color: "blue" };
              }}
              to="/books"
            >
              Books
            </NavLink> */}
            <NavLink to="/books">Books</NavLink>
          </li>
        </ul>
      </nav>
      {/*
        // another way to show routes, through javascript
      {routes} */}
      {routes}
      <Routes>
        {/* the part in element could also be just a regular jsx element */}
        {/* <Route path="/" element={<Home />} /> */}

        {/* <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route> */}

        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

import React, { useState } from "react";
import { useRef } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { NavLink } from "react-router";

export default function Navigation() {
  const [visible, setVisible] = useState(false);
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  const btnRef4 = useRef(null);

  const customIcons = <h1 className="name-org">Edunet</h1>;

  return (
    <div className="card flex ">
      <Sidebar
        header={customIcons}
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <div className="overflow-y-auto">
          <ul className="list-none p-3 m-0">
            <li>
              <StyleClass
                nodeRef={btnRef1}
                selector="@next" // aplica estilos al elemento hermano
                enterFromClassName="hidden"
                enterActiveClassName="slidedown"
                leaveToClassName="hidden"
                leaveActiveClassName="slideup"
              ></StyleClass>
              <ul className="list-none p-0 m-0 ">
                <li>
                  {/* <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"> */}
                  <NavLink
                    to="/"
                    className={({
                      isActive,
                    }) => `p-ripple flex align-items-center cursor-pointer p-3 border-round 
                    text-700 hover:surface-100 transition-duration-150 transition-colors w-full 
                    ${isActive ? "bg-primary text-white" : ""}`}
                  >
                    <i className="pi pi-home mr-2"></i>
                    <span className="font-medium">Dashboard</span>
                    <Ripple />
                  </NavLink>
                  {/*  </a> */}
                </li>
                <li>
                <NavLink
                    to="/otro"
                    className={({
                      isActive,
                    }) => `p-ripple flex align-items-center cursor-pointer p-3 border-round 
                    text-700 hover:surface-100 transition-duration-150 transition-colors w-full 
                    ${isActive ? "bg-primary text-white" : ""}`}
                  >
                    <i className="pi pi-bookmark mr-2"></i>
                    <span className="font-medium">Bookmarks</span>
                    <Ripple />
                  </NavLink>
                </li>
                <li>
                  <StyleClass
                    nodeRef={btnRef2}
                    selector="@next"
                    enterFromClassName="hidden"
                    enterActiveClassName="slidedown"
                    leaveToClassName="hidden"
                    leaveActiveClassName="slideup"
                  >
                    <a
                      ref={btnRef2}
                      className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                    >
                      <i className="pi pi-chart-line mr-2"></i>
                      <span className="font-medium">Reports</span>
                      <i className="pi pi-chevron-down ml-auto mr-1"></i>
                      <Ripple />
                    </a>
                  </StyleClass>
                  <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                      <StyleClass
                        nodeRef={btnRef3}
                        selector="@next"
                        enterFromClassName="hidden"
                        enterActiveClassName="slidedown"
                        leaveToClassName="hidden"
                        leaveActiveClassName="slideup"
                      >
                        <a
                          ref={btnRef3}
                          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                        >
                          <i className="pi pi-chart-line mr-2"></i>
                          <span className="font-medium">Revenue</span>
                          <i className="pi pi-chevron-down ml-auto mr-1"></i>
                          <Ripple />
                        </a>
                      </StyleClass>
                      <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-table mr-2"></i>
                            <span className="font-medium">View</span>
                            <Ripple />
                          </a>
                        </li>
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-search mr-2"></i>
                            <span className="font-medium">Search</span>
                            <Ripple />
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="pi pi-chart-line mr-2"></i>
                        <span className="font-medium">Expenses</span>
                        <Ripple />
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <i className="pi pi-users mr-2"></i>
                    <span className="font-medium">Team</span>
                    <Ripple />
                  </a>
                </li>
                <li>
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <i className="pi pi-comments mr-2"></i>
                    <span className="font-medium">Messages</span>
                    <span
                      className="inline-flex align-items-center justify-content-center ml-auto bg-purple-300 text-0 border-circle"
                      style={{ minWidth: "1.5rem", height: "1.5rem" }}
                    >
                      3
                    </span>
                    <Ripple />
                  </a>
                </li>
                <li>
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <i className="pi pi-calendar mr-2"></i>
                    <span className="font-medium">Calendar</span>
                    <Ripple />
                  </a>
                </li>
                <li>
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <i className="pi pi-cog mr-2"></i>
                    <span className="font-medium">Settings</span>
                    <Ripple />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="list-none p-3 m-0">
            <li>
              <StyleClass
                nodeRef={btnRef4}
                selector="@next"
                enterFromClassName="hidden"
                enterActiveClassName="slidedown"
                leaveToClassName="hidden"
                leaveActiveClassName="slideup"
              >
                <div
                  ref={btnRef4}
                  className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                >
                  <span className="font-medium">APPLICATION</span>
                  <i className="pi pi-chevron-down"></i>
                  <Ripple />
                </div>
              </StyleClass>
              <ul className="list-none p-0 m-0 overflow-hidden hidden">
                <li>
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <i className="pi pi-folder mr-2"></i>
                    <span className="font-medium">Projects</span>
                    <Ripple />
                  </a>
                </li>
                <li>
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <i className="pi pi-chart-bar mr-2"></i>
                    <span className="font-medium">Performance</span>
                    <Ripple />
                  </a>
                </li>
                <li>
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <i className="pi pi-cog mr-2"></i>
                    <span className="font-medium">Settings</span>
                    <Ripple />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Sidebar>
      <Button
        icon="pi pi-th-large"
        rounded
        text
        onClick={() => setVisible(true)}
        pt={{ root: { style: { marginTop: "1rem" } } }}
      />
      <div className="contenedor-options ">
        <div className="cont-btns hidden md:flex">
          <Button icon="pi pi-comments" rounded text aria-label="mensagge" />

          <Button
            icon="pi pi-bell"
            rounded
            text
            aria-label="Notification"
            badge="2"
            pt={{
              root: { style: { position: "relative" } },
              badge: {
                style: { top: "2px", left: "15px", position: "absolute" },
              },
            }}
          />
          <Button icon="pi pi-cog" rounded text aria-label="config" />
        </div>

        <Button rounded text aria-label="flecha">
          <Avatar
            image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
            shape="circle"
            size="large"
          />
          <i className="pi pi-angle-down" style={{ fontSize: "1.3rem" }}></i>
        </Button>
      </div>
    </div>
  );
}

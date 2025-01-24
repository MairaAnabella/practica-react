import React, { useState } from 'react';

import { Link, useLocation } from "react-router-dom"
import { ChevronDown, Home, Bookmark, FileText, Users, MessageCircle, Calendar, Settings } from "lucide-react"
import { Button } from 'primereact/button';
import { Avatar } from "primereact/avatar";
import { Sidebar } from 'primereact/sidebar';
import "../styles/slideBar.css"

export default function SidebarNav() {
  const location = useLocation()
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(true)
  const [isReportsOpen, setIsReportsOpen] = useState(false)
  const [visible, setVisible] = useState(false);
  const reportItems = [
    { label: "Analytics", path: "/reports/analytics" },
    { label: "Sales", path: "/reports/sales" },
    { label: "Performance", path: "/reports/performance" },
  ]



  
  const customIcons = (
    <React.Fragment>
        <button className="p-sidebar-icon p-link mr-2">
            <span className="pi pi-search" />
        </button>
    </React.Fragment>
);

const customHeader = (
    <div className="flex align-items-center gap-2">
        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
        <span className="font-bold">Amy Elsner</span>
    </div>
);

  return (

    <Sidebar header={customHeader} visible={visible} onHide={() => setVisible(false)} icons={customIcons}>
   

 

      <div className="sidebar-section">
        <button className="sidebar-button" onClick={() => setIsFavoritesOpen(!isFavoritesOpen)}>
          FAVORITES
          <ChevronDown className={`chevron ${isFavoritesOpen ? "open" : ""}`} />
        </button>
      </div>

      {isFavoritesOpen && (
        <nav className="sidebar-nav">
          <NavItem icon={<Home />} label="Dashboard" to="/" isActive={location.pathname === "/home"} />
          <NavItem
            icon={<Bookmark />}
            label="Bookmarks"
            to="/bookmarks"
            isActive={location.pathname === "/bookmarks"}
          />
          <div>
            <NavItem
              icon={<FileText />}
              label="Reports"
              hasDropdown
              isOpen={isReportsOpen}
              onClick={() => setIsReportsOpen(!isReportsOpen)}
              isActive={location.pathname.startsWith("/reports")}
            />
            {isReportsOpen && (
              <div className="submenu">
                {reportItems.map((item) => (
                  <NavItem
                    key={item.path}
                    label={item.label}
                    to={item.path}
                    isActive={location.pathname === item.path}
                  />
                ))}
              </div>
            )}
          </div>
          <NavItem icon={<Users />} label="Team" to="/team" isActive={location.pathname === "/team"} />
          <NavItem
            icon={<MessageCircle />}
            label="Messages"
            to="/messages"
            isActive={location.pathname === "/messages"}
            badge="3"
          />
          <NavItem icon={<Calendar />} label="Calendar" to="/calendar" isActive={location.pathname === "/calendar"} />
          <NavItem icon={<Settings />} label="Settings" to="/settings" isActive={location.pathname === "/settings"} />
        </nav>
      )}

<Button icon="pi pi-plus" onClick={() => setVisible(true)} />
  
    </Sidebar>
  )
  
}


function NavItem({ icon, label, to, hasDropdown, isOpen, isActive, badge, onClick }) {
  const content = (
    <div className="nav-item-content">
      {icon}
      <span>{label}</span>
    </div>
  )

  const navItemClass = `nav-item ${isActive ? "active" : ""}`

  if (onClick) {
    return (
      <button className={navItemClass} onClick={onClick}>
        {content}
        {hasDropdown && <ChevronDown className={`nav-item-dropdown chevron ${isOpen ? "open" : ""}`} />}
        {badge && <span className="badge">{badge}</span>}
      </button>
    )
  }

  return (
    <Link to={to || "#"} className={navItemClass}>
      {content}
      {badge && <span className="badge">{badge}</span>}
    </Link>
  )
}


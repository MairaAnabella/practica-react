import React from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Tooltip } from 'primereact/tooltip';
import "../styles/perfilStyles.css";

export default function PerfilUser({ visibleRight, setVisibleRight }) {
  // 📌 Recibe props del padre

  const customHeader = (
    <div className="flex align-items-center gap-2">
      <Button  tooltip="Cerrar sesion" className="p-sidebar-icon p-link mr-2">
        <span className="pi pi-sign-out" />
      </Button>
    </div>
  );

  return (
    <div>
      <Sidebar
        header={customHeader}
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
      >
        <div className="containerFoto">
          {/* 🔹 Avatar */}
          <Avatar
            image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
            shape="circle"
            size="xlarge"
            className="border-2 border-gray-300 avatarUser"
          />

          {/* 🔹 Botón de añadir */}
          <Button
            icon="pi pi-pencil"
            className=" p-button-rounded  p-button-primary w-0.5 btnImg"
            aria-label="Add"
            tooltip="Editar Foto"
            tooltipOptions={{
                pt: {
                  root: { className: "h-0.5" }, // Personaliza el contenedor
                  arrow: { className: "border-t-blue-500" } // Personaliza la flecha
                }
              }}
          />
        </div>

        <div className="contenedorDatos">
          <h1 className="nombreUser">Anna Madison</h1>
          <span>tipo de rol</span>
        </div>
        <div className="contenedorLinks">
          <Button
            icon="pi pi-comments"
            text
            raised
            className="btnOption custom-icon-size"
            label="Chat"
          />

          <Button
            icon="pi pi-bell "
            text
            raised
            className="btnOption custom-icon-size"
            label="Notificaciones"
          />
          <Button
            icon="pi pi-cog "
            text
            raised
            className="btnOption custom-icon-size"
            label="Configuracion"
          />
        </div>
      </Sidebar>
    </div>
  );
}

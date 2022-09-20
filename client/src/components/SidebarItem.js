function SidebarItem({ menu, isActive }) {
  return isActive === true ? (
    <div className="bg-yellow-300">
      <p>{menu.name}</p>
    </div>
  ) : (
    <div className="bg-red-300 ">
      <p>{menu.name}</p>
    </div>
  );
}

export default SidebarItem;

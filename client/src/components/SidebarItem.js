function SidebarItem({ menu, isActive }) {
  return isActive === true ? (
    <div className="bg-yellow-300 font-bold text-center rounded-3xl  my-2">
      <p>{menu.name}</p>
    </div>
  ) : (
    <div className="hover:bg-yellow-200 text-center rounded-3xl  my-2">
      <p>{menu.name}</p>
    </div>
  );
}

export default SidebarItem;

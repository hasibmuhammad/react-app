function Message() {
  const name = "John";
  if (name) return <button className="text-orange-400">Hello {name}</button>;
  return <button>Hello World</button>;
}

export default Message;

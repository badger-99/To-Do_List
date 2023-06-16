export default (array) => {
  return array.filter(item => item.completed===false)
}
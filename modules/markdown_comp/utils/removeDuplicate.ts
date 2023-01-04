export default function removeDuplicates(data: string[]) {
    let unique = []
    for (let i = 0; i < data.length; i++) {
      if (unique.indexOf(data[i]) === -1) {
        unique.push(data[i])
      }
    }
    return unique
  }
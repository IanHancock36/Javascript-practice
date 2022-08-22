const chunkArrayInGroups = (arr,  size) =>
  arr
  .flatMap(
    (_, i, a) => 
      i % size === 0 ? [ a.slice(i, i + size) ] 
      : []
  )

  
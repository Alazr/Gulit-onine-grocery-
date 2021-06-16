

export const sortBy = (items,col,ord) =>{
    return _.orderBy(items,[col],[ord])
}
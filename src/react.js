import { configure } from "@testing-library/react"

export function createElement(type,config = {},...children){
    let props  = {...config, children};
    return {
      type,
      props
    }
  }


export default {
  createElement
}
import Link from "next/link";
import Apresentation from "../components/apresentation";
import Services from "../components/services";

export default function Index() {
  return (
    <div className="h-auto overflow-x-hidden">
      <Apresentation />
      <Services />
    </div>
  )
}

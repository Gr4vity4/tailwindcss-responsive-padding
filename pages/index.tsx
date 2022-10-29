import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto min-h-screen flex items-center justify-center p-10">
      <div className="w-full h-full border-2 border-gray-300 border-dashed rounded-lg flex items-center justify-center">
        <div className="w-full flex flex-col items-center p-2 md:p-6">
          <div>
            <input type="text" className="border border-gray-100 rounded p-3" placeholder="tm" />
          </div>
          <div className="w-full flex justify-between items-center">
            <div>
              <input type="text" className="border border-gray-100 rounded p-3" placeholder="lm" />
            </div>
            <div className="w-full h-full border-2 border-blue-400 border-solid rounded-lg flex items-center justify-center p-2 m-2 md:p-10 md:m-4">
              <div className="w-full flex flex-col items-center gap-6">
                <input type="text" className="border border-gray-100 rounded p-3" placeholder="tp" />
                <div className="w-full flex justify-between gap-6">
                  <input type="text" className="border border-gray-100 rounded p-3" placeholder="lp" />
                  <div className="bg-gray-300 w-full"></div>
                  <input type="text" className="border border-gray-100 rounded p-3" placeholder="rp" />
                </div>
                <div>
                  <input type="text" className="border border-gray-100 rounded p-3" placeholder="bp" />
                </div>
              </div>
            </div>
            <div>
              <input type="text" className="border border-gray-100 rounded p-3" placeholder="rm" />
            </div>
          </div>
          <div>
            <input type="text" className="border border-gray-100 rounded p-3" placeholder="bm" />
          </div>
        </div>
      </div>
    </div>
  );
}

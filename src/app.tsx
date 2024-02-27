import { AddNewItemForm } from './components/add-new-item-form'

export function App() {
  return (
    <>
      <div
        className={`bg-no-repeat bg-cover bg-left-top h-[185px] bg-[url(./assets/background.png)]`}
      />

      <main className="max-w-[720px] mx-auto mt-[-100px] px-6 sm:p-0 space-y-8">
        <h1 className="text-gray-100 font-bold text-3xl leading-none">
          Lista de Compras
        </h1>

        <AddNewItemForm />
      </main>
    </>
  )
}

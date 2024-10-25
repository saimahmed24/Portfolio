const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Experiene</h1>
        <div>
            {EXPERIENCES.map((experience, index))=> (
                <div key={index} className="mb"></div>
            )

            }
        </div>
    
    </div>
  )
}

export default Experience

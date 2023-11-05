import { data } from 'autoprefixer';
import Swal from 'sweetalert2'

const AddBrand = () => {
    const handleAddBrand = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const branded = form.branded.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const category = form.category.value;
        const photo = form.photo.value;

        const newBrand = {name, branded, type,  price, rating, description, category, photo };

        console.log(newBrand);

        // send data
        fetch('https://promotion-dept-server.vercel.app/brands',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newBrand),
          })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'User Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    }
  return (
    <div className="bg-blue-200 p-24 mb-8">
      <h2 className="text-3xl font-bold">Brand Name</h2>
      <form onSubmit={handleAddBrand}>
        {/* form row for Photo URL */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row for name  */}
        <div className="md:flex">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2 ml-3">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="branded"
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row for type & Category */}
        <div className="md:flex mb-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                placeholder="Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2 ml-3">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row for description  */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
         {/* form row for price & rating */}
         <div className="md:flex mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
         {/* form row for rating */}
         <div className="md:flex mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="add Brand" className="btn btn-block bg-gray-400" />
      </form>
    </div>
  );
};

export default AddBrand;

<template>
  <div class="container text-right">
    <div class="row">
      <div class="col">
        <div class="row justify-content-end">
          <h4 class="font-weight-bold">About</h4>

          <p>Hi, my name is Patrick. I'm based in the Amsterdam area, The Netherlands. I'm an experienced Unity 3D developer specialized in AR/VR working in the media production industry.</p>

          <p>I've been working with Unity3D, 3D Modelling, Web Development, QGIS and Adobe Photoshop for a number of years. I love working with procedural and experimental technologies, bringing tech and people together and using 3D visualization as a communication device.</p>

          <p>I'm a team player, I love working with people who are passionate about their work and I always try to communicate technical concepts in a way that anyone can understand. I've got an artistic eye and a technical mind.</p>
        </div>
        <div class="row justify-content-end">
          <div class="col p-0">
            <h4 class="font-weight-bold">Contact</h4>
            <div class="row justify-content-end px-3">

            <ul class="list-group list-group-flush w-50">
                <li class="list-group-item bg-transparent"><i class="fas fa-phone"></i> {{social.phone}} </li>
                                <li class="list-group-item bg-transparent border-top-0"><i class="fas fa-envelope"></i> {{social.email}} </li>

            </ul>
                        </div>

            <div class="btn-group">
              <button class="btn btn-outline-dark" v-for="(network, index) in social.networks" :key="index">
                <i :class="network.icon" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <img class="img-fluid" src="../../assets/profile.jpg">
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      social:
      {
          phone:"+31 36104378",
          email: "psbheh@gmail.com",
          networks:[
          {
              name:"linkedin",
              description:"Go to my LinkedIn profile",
              icon:"fab fa-linkedin-in",
              url:""
          },
           {
              name:"artstation",
              description:"Go to my Artstation profile",
              icon:"fab fa-artstation",
              url:""
          }
      ]}

    };
  }
};
</script>

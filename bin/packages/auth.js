steal.has("modules/auth/components/comp1/comp1.js","modules/auth/components/comp2/comp2.js","modules/auth/components/comp3/comp3.js","modules/auth/components/comp4/comp4.js","modules/auth/auth.js");steal.pushPending();steal(function(){console.log("auth comp1 loaded!")});steal.executed("modules/auth/components/comp1/comp1.js");steal("modules/auth/components/comp1",function(){console.log("auth comp2 loaded!")});steal.executed("modules/auth/components/comp2/comp2.js");
steal("modules/auth/components/comp1","modules/auth/components/comp2",function(){console.log("auth comp3 loaded!")});steal.executed("modules/auth/components/comp3/comp3.js");steal("modules/auth/components/comp1","modules/auth/components/comp2","modules/auth/components/comp3",function(){console.log("auth comp4 loaded!")});steal.executed("modules/auth/components/comp4/comp4.js");steal("modules/auth/components/comp4",function(){console.log("auth module loaded!")});steal.executed("modules/auth/auth.js");
steal.popPending();

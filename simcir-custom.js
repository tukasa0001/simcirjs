// includes following device types:
//  4Input-And

simcir.registerDevice("4AND", 
{
    "width":1280,
    "height":720,
    "showToolbox":true,
    "toolbox":[
    ],
    "devices":[
        {"type":"AND","id":"dev0","x":408,"y":208,"label":"AND"},
        {"type":"AND","id":"dev1","x":424,"y":312,"label":"AND"},
        {"type":"AND","id":"dev2","x":488,"y":280,"label":"AND"},
        {"type":"Out","id":"dev3","x":552,"y":272,"label":"Out"},
        {"type":"In","id":"dev4","x":320,"y":184,"label":"In1"},
        {"type":"In","id":"dev5","x":304,"y":232,"label":"In2"},
        {"type":"In","id":"dev6","x":312,"y":280,"label":"In3"},
        {"type":"In","id":"dev7","x":304,"y":336,"label":"In4"}
    ],
    "connectors":[
        {"from":"dev0.in0","to":"dev4.out0"},
        {"from":"dev0.in1","to":"dev5.out0"},
        {"from":"dev1.in0","to":"dev6.out0"},
        {"from":"dev1.in1","to":"dev7.out0"},
        {"from":"dev2.in0","to":"dev0.out0"},
        {"from":"dev2.in1","to":"dev1.out0"},
        {"from":"dev3.in0","to":"dev2.out0"}
    ]
});
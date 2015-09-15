export var data = {
  "routines": [
  {
    "tag":"sub_10001000",
    "label":"sub_10001000",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_10001000",
        "label":"sub_10001000",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, 1" },
          { "str":"retn    0Ch" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10001010",
    "label":"sub_10001010",
    "type":"idapro",
    "callees":[
      { "tag":"ds_GetCommandLineA" },
      { "tag":"ds_GetVersion" },
      { "tag":"sub_100011B9" },
      { "tag":"sub_100011F7" },
      { "tag":"sub_100012D7" },
      { "tag":"sub_1000132B" },
      { "tag":"sub_100013C3" },
      { "tag":"sub_10001463" },
      { "tag":"sub_1000161F" },
      { "tag":"sub_10001673" },
      { "tag":"sub_1000172C" },
      { "tag":"sub_10001979" },
      { "tag":"sub_10001C20" },
      { "tag":"sub_10001C7D" }
    ],
    "blocks":[
      {
        "tag":"sub_10001010",
        "label":"sub_10001010",
        "out_true":"loc_100010A5",
        "out_false":"label_0",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     eax, [esp+arg_4]" },
          { "str":"cmp     eax, 1" },
          { "str":"jnz     loc_100010A5" }
        ],
        "callees":[]
      },
{
        "tag":"label_0",
        "label":"label_0",
        "out_true":"loc_10001070",
        "out_false":"label_1",
        "last_inst":"jz",
        "instructions":[
          { "str":"call    ds:GetVersion" },
          { "str":"push    1" },
          { "str":"mov     dword_10008A50, eax" },
          { "str":"call    sub_10001C20" },
          { "str":"test    eax, eax" },
          { "str":"pop     ecx" },
          { "str":"jz      short loc_10001070" }
        ],
        "callees":[
          { "tag":"ds_GetVersion" },
          { "tag":"sub_10001C20" }
        ]
      },
{
        "tag":"label_1",
        "label":"label_1",
        "out_true":"loc_10001074",
        "out_false":"label_2",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     eax, dword_10008A50" },
          { "str":"xor     ecx, ecx" },
          { "str":"mov     cl, byte ptr dword_10008A50+1" },
          { "str":"and     eax, 0FFh" },
          { "str":"shr     dword_10008A50, 10h" },
          { "str":"mov     dword_10008A58, eax" },
          { "str":"mov     dword_10008A5C, ecx" },
          { "str":"shl     eax, 8" },
          { "str":"add     eax, ecx" },
          { "str":"mov     dword_10008A54, eax" },
          { "str":"call    sub_100012D7" },
          { "str":"test    eax, eax" },
          { "str":"jnz     short loc_10001074" }
        ],
        "callees":[
          { "tag":"sub_100012D7" }
        ]
      },
{
        "tag":"label_2",
        "label":"label_2",
        "out_true":"loc_10001070",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"call    sub_10001C7D" }
        ],
        "callees":[
          { "tag":"sub_10001C7D" }
        ]
      },
{
        "tag":"loc_10001070",
        "label":"loc_10001070",
        "out_true":"locret_100010E6",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"xor     eax, eax" },
          { "str":"jmp     short locret_100010E6" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001074",
        "label":"loc_10001074",
        "out_true":"loc_100010E3",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"call    ds:GetCommandLineA" },
          { "str":"mov     dword_10009118, eax" },
          { "str":"call    sub_10001979" },
          { "str":"mov     dword_10008A3C, eax" },
          { "str":"call    sub_10001463" },
          { "str":"call    sub_1000172C" },
          { "str":"call    sub_10001673" },
          { "str":"call    sub_100011B9" },
          { "str":"inc     dword_10008A38" },
          { "str":"jmp     short loc_100010E3" }
        ],
        "callees":[
          { "tag":"ds_GetCommandLineA" },
          { "tag":"sub_100011B9" },
          { "tag":"sub_10001463" },
          { "tag":"sub_10001673" },
          { "tag":"sub_1000172C" },
          { "tag":"sub_10001979" }
        ]
      },
{
        "tag":"loc_100010A5",
        "label":"loc_100010A5",
        "out_true":"loc_100010D7",
        "out_false":"label_3",
        "last_inst":"jnz",
        "instructions":[
          { "str":"xor     ecx, ecx" },
          { "str":"cmp     eax, ecx" },
          { "str":"jnz     short loc_100010D7" }
        ],
        "callees":[]
      },
{
        "tag":"label_3",
        "label":"label_3",
        "out_true":"loc_10001070",
        "out_false":"label_4",
        "last_inst":"jl",
        "instructions":[
          { "str":"cmp     dword_10008A38, ecx" },
          { "str":"jle     short loc_10001070" }
        ],
        "callees":[]
      },
{
        "tag":"label_4",
        "label":"label_4",
        "out_true":"loc_100010C6",
        "out_false":"label_5",
        "last_inst":"jnz",
        "instructions":[
          { "str":"dec     dword_10008A38" },
          { "str":"cmp     dword_10008A88, ecx" },
          { "str":"jnz     short loc_100010C6" }
        ],
        "callees":[]
      },
{
        "tag":"label_5",
        "label":"label_5",
        "out_true":"loc_100010C6",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"call    sub_100011F7" }
        ],
        "callees":[
          { "tag":"sub_100011F7" }
        ]
      },
{
        "tag":"loc_100010C6",
        "label":"loc_100010C6",
        "out_true":"loc_100010E3",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"call    sub_1000161F" },
          { "str":"call    sub_1000132B" },
          { "str":"call    sub_10001C7D" },
          { "str":"jmp     short loc_100010E3" }
        ],
        "callees":[
          { "tag":"sub_1000132B" },
          { "tag":"sub_1000161F" },
          { "tag":"sub_10001C7D" }
        ]
      },
{
        "tag":"loc_100010D7",
        "label":"loc_100010D7",
        "out_true":"loc_100010E3",
        "out_false":"label_6",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     eax, 3" },
          { "str":"jnz     short loc_100010E3" }
        ],
        "callees":[]
      },
{
        "tag":"label_6",
        "label":"label_6",
        "out_true":"loc_100010E3",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ecx" },
          { "str":"call    sub_100013C3" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_100013C3" }
        ]
      },
{
        "tag":"loc_100010E3",
        "label":"loc_100010E3",
        "out_true":"locret_100010E6",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    1" },
          { "str":"pop     eax" }
        ],
        "callees":[]
      },
{
        "tag":"locret_100010E6",
        "label":"locret_100010E6",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"retn    0Ch" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"rtn_0",
    "label":"rtn_0",
    "type":"ours",
    "callees":[
      { "tag":"ds_VirtualAlloc" },
      { "tag":"eax" },
      { "tag":"esi" },
      { "tag":"sub_10001010" }
    ],
    "blocks":[
      {
        "tag":"blk_7",
        "label":"blk_7",
        "out_true":"loc_10001138",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"sub     esp, 4" },
          { "str":"pusha" },
          { "str":"mov     esi, 10h" },
          { "str":"lea     ecx, [esi+esi*2+10h]" },
          { "str":"push    ecx" },
          { "str":"mov     ecx, 1" },
          { "str":"shl     ecx, 0Ch" },
          { "str":"push    ecx" },
          { "str":"mov     ebx, 100h" },
          { "str":"lea     ebx, [ebx+700h]" },
          { "str":"push    ebx" },
          { "str":"xor     esi, esi" },
          { "str":"push    esi" },
          { "str":"call    ds:VirtualAlloc" },
          { "str":"push    eax" },
          { "str":"pop     edx" },
          { "str":"mov     eax, 0" },
          { "str":"xor     eax, offset unk_1000BC5C" },
          { "str":"mov     ecx, eax" },
          { "str":"mov     esi, offset unk_1000BC5C" },
          { "str":"neg     esi" },
          { "str":"add     ecx, esi" },
          { "str":"push    ecx" },
          { "str":"push    edx" },
          { "str":"lea     edi, [eax]" },
          { "str":"xor     ebx, ebx" },
          { "str":"or      ebx, [edi]" },
          { "str":"inc     eax" },
          { "str":"add     eax, 3" }
        ],
        "callees":[
          { "tag":"ds_VirtualAlloc" }
        ]
      },
{
        "tag":"loc_10001138",
        "label":"loc_10001138",
        "out_true":"loc_10001138",
        "out_false":"label_8",
        "last_inst":"jnz",
        "instructions":[
          { "str":"movzx   ecx, byte ptr [eax+ebx-1]" },
          { "str":"lea     esi, [edx+ebx-1]" },
          { "str":"mov     [esi], cl" },
          { "str":"add     ebx, 0FFFFFFFFh" },
          { "str":"or      ebx, ebx" },
          { "str":"jnz     short loc_10001138" }
        ],
        "callees":[]
      },
{
        "tag":"label_8",
        "label":"label_8",
        "out_true":"loc_10001165",
        "out_false":"label_9",
        "last_inst":"jnz",
        "instructions":[
          { "str":"pop     esi" },
          { "str":"mov     [esi+1], esi" },
          { "str":"call    esi" },
          { "str":"add     eax, 7503FE83h" },
          { "str":"push    edi" },
          { "str":"push    esi" },
          { "str":"push    ebx" },
          { "str":"call    sub_10001010" },
          { "str":"test    eax, eax" },
          { "str":"jnz     short loc_10001165" }
        ],
        "callees":[
          { "tag":"esi" },
          { "tag":"sub_10001010" }
        ]
      },
{
        "tag":"label_9",
        "label":"label_9",
        "out_true":"loc_10001165",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"and     [ebp+0Ch], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001165",
        "label":"loc_10001165",
        "out_true":"loc_1000117C",
        "out_false":"label_10",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     dword ptr [ebp+0Ch], 0" },
          { "str":"jz      short loc_1000117C" }
        ],
        "callees":[]
      },
{
        "tag":"label_10",
        "label":"label_10",
        "out_true":"loc_1000117C",
        "out_false":"label_11",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, dword_1000911C" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_1000117C" }
        ],
        "callees":[]
      },
{
        "tag":"label_11",
        "label":"label_11",
        "out_true":"loc_1000117C",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    edi" },
          { "str":"push    esi" },
          { "str":"push    ebx" },
          { "str":"call    eax" },
          { "str":"mov     [ebp+0Ch], eax" }
        ],
        "callees":[
          { "tag":"eax" }
        ]
      },
{
        "tag":"loc_1000117C",
        "label":"loc_1000117C",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, [ebp+0Ch]" },
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"pop     ebp" },
          { "str":"retn    0Ch" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10001186",
    "label":"sub_10001186",
    "type":"idapro",
    "callees":[
      { "tag":"off_10006030" },
      { "tag":"sub_10001D25" },
      { "tag":"sub_10001D5E" }
    ],
    "blocks":[
      {
        "tag":"sub_10001186",
        "label":"sub_10001186",
        "out_true":"loc_1000119D",
        "out_false":"label_12",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, dword_10008A44" },
          { "str":"cmp     eax, 1" },
          { "str":"jz      short loc_1000119D" }
        ],
        "callees":[]
      },
{
        "tag":"label_12",
        "label":"label_12",
        "out_true":"loc_100011A2",
        "out_false":"label_13",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    eax, eax" },
          { "str":"jnz     short loc_100011A2" }
        ],
        "callees":[]
      },
{
        "tag":"label_13",
        "label":"label_13",
        "out_true":"loc_100011A2",
        "out_false":"loc_1000119D",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     dword_10008A48, 1" },
          { "str":"jnz     short loc_100011A2" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000119D",
        "label":"loc_1000119D",
        "out_true":"loc_100011A2",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"call    sub_10001D25" }
        ],
        "callees":[
          { "tag":"sub_10001D25" }
        ]
      },
{
        "tag":"loc_100011A2",
        "label":"loc_100011A2",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    [esp+NumberOfBytesWritten]" },
          { "str":"call    sub_10001D5E" },
          { "str":"push    0FFh" },
          { "str":"call    off_10006030" },
          { "str":"pop     ecx" },
          { "str":"pop     ecx" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"off_10006030" },
          { "tag":"sub_10001D5E" }
        ]
      }
    ]
  },{
    "tag":"sub_100011B9",
    "label":"sub_100011B9",
    "type":"idapro",
    "callees":[
      { "tag":"eax" },
      { "tag":"sub_100012BD" }
    ],
    "blocks":[
      {
        "tag":"sub_100011B9",
        "label":"sub_100011B9",
        "out_true":"loc_100011C4",
        "out_false":"label_14",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, dword_10009114" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_100011C4" }
        ],
        "callees":[]
      },
{
        "tag":"label_14",
        "label":"label_14",
        "out_true":"loc_100011C4",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"call    eax" }
        ],
        "callees":[
          { "tag":"eax" }
        ]
      },
{
        "tag":"loc_100011C4",
        "label":"loc_100011C4",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    offset unk_10006010" },
          { "str":"push    offset unk_10006008" },
          { "str":"call    sub_100012BD" },
          { "str":"push    offset unk_10006004" },
          { "str":"push    offset unk_10006000" },
          { "str":"call    sub_100012BD" },
          { "str":"add     esp, 10h" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"sub_100012BD" }
        ]
      }
    ]
  },{
    "tag":"sub_100011E6",
    "label":"sub_100011E6",
    "type":"idapro",
    "callees":[
      { "tag":"sub_10001206" }
    ],
    "blocks":[
      {
        "tag":"sub_100011E6",
        "label":"sub_100011E6",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    0" },
          { "str":"push    1" },
          { "str":"push    [esp+8+uExitCode]" },
          { "str":"call    sub_10001206" },
          { "str":"add     esp, 0Ch" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"sub_10001206" }
        ]
      }
    ]
  },{
    "tag":"sub_100011F7",
    "label":"sub_100011F7",
    "type":"idapro",
    "callees":[
      { "tag":"sub_10001206" }
    ],
    "blocks":[
      {
        "tag":"sub_100011F7",
        "label":"sub_100011F7",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    1" },
          { "str":"push    0" },
          { "str":"push    0" },
          { "str":"call    sub_10001206" },
          { "str":"add     esp, 0Ch" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"sub_10001206" }
        ]
      }
    ]
  },{
    "tag":"sub_10001206",
    "label":"sub_10001206",
    "type":"idapro",
    "callees":[
      { "tag":"ds_ExitProcess" },
      { "tag":"ds_GetCurrentProcess" },
      { "tag":"ds_TerminateProcess" },
      { "tag":"eax" },
      { "tag":"sub_100012AB" },
      { "tag":"sub_100012B4" },
      { "tag":"sub_100012BD" }
    ],
    "blocks":[
      {
        "tag":"sub_10001206",
        "label":"sub_10001206",
        "out_true":"loc_10001228",
        "out_false":"label_15",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    edi" },
          { "str":"call    sub_100012AB" },
          { "str":"push    1" },
          { "str":"pop     edi" },
          { "str":"cmp     dword_10008A8C, edi" },
          { "str":"jnz     short loc_10001228" }
        ],
        "callees":[
          { "tag":"sub_100012AB" }
        ]
      },
{
        "tag":"label_15",
        "label":"label_15",
        "out_true":"loc_10001228",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    [esp+4+uExitCode]" },
          { "str":"call    ds:GetCurrentProcess" },
          { "str":"push    eax" },
          { "str":"call    ds:TerminateProcess" }
        ],
        "callees":[
          { "tag":"ds_GetCurrentProcess" },
          { "tag":"ds_TerminateProcess" }
        ]
      },
{
        "tag":"loc_10001228",
        "label":"loc_10001228",
        "out_true":"loc_1000127C",
        "out_false":"label_16",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     [esp+4+arg_4], 0" },
          { "str":"push    ebx" },
          { "str":"mov     ebx, [esp+8+arg_8]" },
          { "str":"mov     dword_10008A88, edi" },
          { "str":"mov     byte_10008A84, bl" },
          { "str":"jnz     short loc_1000127C" }
        ],
        "callees":[]
      },
{
        "tag":"label_16",
        "label":"label_16",
        "out_true":"loc_1000126B",
        "out_false":"label_17",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, dword_10009110" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_1000126B" }
        ],
        "callees":[]
      },
{
        "tag":"label_17",
        "label":"label_17",
        "out_true":"loc_1000126A",
        "out_false":"loc_10001257",
        "last_inst":"jb",
        "instructions":[
          { "str":"mov     ecx, dword_1000910C" },
          { "str":"push    esi" },
          { "str":"lea     esi, [ecx-4]" },
          { "str":"cmp     esi, eax" },
          { "str":"jb      short loc_1000126A" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001257",
        "label":"loc_10001257",
        "out_true":"loc_1000125F",
        "out_false":"label_18",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [esi]" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_1000125F" }
        ],
        "callees":[]
      },
{
        "tag":"label_18",
        "label":"label_18",
        "out_true":"loc_1000125F",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"call    eax" }
        ],
        "callees":[
          { "tag":"eax" }
        ]
      },
{
        "tag":"loc_1000125F",
        "label":"loc_1000125F",
        "out_true":"loc_10001257",
        "out_false":"loc_1000126A",
        "last_inst":"jnb",
        "instructions":[
          { "str":"sub     esi, 4" },
          { "str":"cmp     esi, dword_10009110" },
          { "str":"jnb     short loc_10001257" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000126A",
        "label":"loc_1000126A",
        "out_true":"loc_1000126B",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"pop     esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000126B",
        "label":"loc_1000126B",
        "out_true":"loc_1000127C",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    offset unk_10006018" },
          { "str":"push    offset unk_10006014" },
          { "str":"call    sub_100012BD" },
          { "str":"pop     ecx" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_100012BD" }
        ]
      },
{
        "tag":"loc_1000127C",
        "label":"loc_1000127C",
        "out_true":"loc_10001299",
        "out_false":"label_19",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    offset unk_10006020" },
          { "str":"push    offset unk_1000601C" },
          { "str":"call    sub_100012BD" },
          { "str":"pop     ecx" },
          { "str":"pop     ecx" },
          { "str":"test    ebx, ebx" },
          { "str":"pop     ebx" },
          { "str":"jz      short loc_10001299" }
        ],
        "callees":[
          { "tag":"sub_100012BD" }
        ]
      },
{
        "tag":"label_19",
        "label":"label_19",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"call    sub_100012B4" },
          { "str":"pop     edi" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"sub_100012B4" }
        ]
      },
{
        "tag":"loc_10001299",
        "label":"loc_10001299",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    [esp+4+uExitCode]" },
          { "str":"mov     dword_10008A8C, edi" },
          { "str":"call    ds:ExitProcess" },
          { "str":"pop     edi" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"ds_ExitProcess" }
        ]
      }
    ]
  },{
    "tag":"sub_100012AB",
    "label":"sub_100012AB",
    "type":"idapro",
    "callees":[
      { "tag":"sub_10001F46" }
    ],
    "blocks":[
      {
        "tag":"sub_100012AB",
        "label":"sub_100012AB",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    0Dh" },
          { "str":"call    sub_10001F46" },
          { "str":"pop     ecx" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"sub_10001F46" }
        ]
      }
    ]
  },{
    "tag":"sub_100012B4",
    "label":"sub_100012B4",
    "type":"idapro",
    "callees":[
      { "tag":"sub_10001FA7" }
    ],
    "blocks":[
      {
        "tag":"sub_100012B4",
        "label":"sub_100012B4",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    0Dh" },
          { "str":"call    sub_10001FA7" },
          { "str":"pop     ecx" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"sub_10001FA7" }
        ]
      }
    ]
  },{
    "tag":"sub_100012BD",
    "label":"sub_100012BD",
    "type":"idapro",
    "callees":[
      { "tag":"eax" }
    ],
    "blocks":[
      {
        "tag":"sub_100012BD",
        "label":"sub_100012BD",
        "out_true":"loc_100012C2",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    esi" },
          { "str":"mov     esi, [esp+4+arg_0]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100012C2",
        "label":"loc_100012C2",
        "out_true":"loc_100012D5",
        "out_false":"label_20",
        "last_inst":"jnb",
        "instructions":[
          { "str":"cmp     esi, [esp+4+arg_4]" },
          { "str":"jnb     short loc_100012D5" }
        ],
        "callees":[]
      },
{
        "tag":"label_20",
        "label":"label_20",
        "out_true":"loc_100012D0",
        "out_false":"label_21",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [esi]" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_100012D0" }
        ],
        "callees":[]
      },
{
        "tag":"label_21",
        "label":"label_21",
        "out_true":"loc_100012D0",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"call    eax" }
        ],
        "callees":[
          { "tag":"eax" }
        ]
      },
{
        "tag":"loc_100012D0",
        "label":"loc_100012D0",
        "out_true":"loc_100012C2",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"add     esi, 4" },
          { "str":"jmp     short loc_100012C2" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100012D5",
        "label":"loc_100012D5",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     esi" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_100012D7",
    "label":"sub_100012D7",
    "type":"idapro",
    "callees":[
      { "tag":"ds_GetCurrentThreadId" },
      { "tag":"ds_TlsAlloc" },
      { "tag":"ds_TlsSetValue" },
      { "tag":"sub_10001349" },
      { "tag":"sub_10001EB1" },
      { "tag":"sub_10001FBC" }
    ],
    "blocks":[
      {
        "tag":"sub_100012D7",
        "label":"sub_100012D7",
        "out_true":"loc_10001327",
        "out_false":"label_22",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    esi" },
          { "str":"call    sub_10001EB1" },
          { "str":"call    ds:TlsAlloc" },
          { "str":"cmp     eax, 0FFFFFFFFh" },
          { "str":"mov     dwTlsIndex, eax" },
          { "str":"jz      short loc_10001327" }
        ],
        "callees":[
          { "tag":"ds_TlsAlloc" },
          { "tag":"sub_10001EB1" }
        ]
      },
{
        "tag":"label_22",
        "label":"label_22",
        "out_true":"loc_10001327",
        "out_false":"label_23",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    74h" },
          { "str":"push    1" },
          { "str":"call    sub_10001FBC" },
          { "str":"mov     esi, eax" },
          { "str":"pop     ecx" },
          { "str":"test    esi, esi" },
          { "str":"pop     ecx" },
          { "str":"jz      short loc_10001327" }
        ],
        "callees":[
          { "tag":"sub_10001FBC" }
        ]
      },
{
        "tag":"label_23",
        "label":"label_23",
        "out_true":"loc_10001327",
        "out_false":"label_24",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    esi" },
          { "str":"push    dwTlsIndex" },
          { "str":"call    ds:TlsSetValue" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10001327" }
        ],
        "callees":[
          { "tag":"ds_TlsSetValue" }
        ]
      },
{
        "tag":"label_24",
        "label":"label_24",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    esi" },
          { "str":"call    sub_10001349" },
          { "str":"pop     ecx" },
          { "str":"call    ds:GetCurrentThreadId" },
          { "str":"or      dword ptr [esi+4], 0FFFFFFFFh" },
          { "str":"push    1" },
          { "str":"mov     [esi], eax" },
          { "str":"pop     eax" },
          { "str":"pop     esi" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"ds_GetCurrentThreadId" },
          { "tag":"sub_10001349" }
        ]
      },
{
        "tag":"loc_10001327",
        "label":"loc_10001327",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"xor     eax, eax" },
          { "str":"pop     esi" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_1000132B",
    "label":"sub_1000132B",
    "type":"idapro",
    "callees":[
      { "tag":"ds_TlsFree" },
      { "tag":"sub_10001EDA" }
    ],
    "blocks":[
      {
        "tag":"sub_1000132B",
        "label":"sub_1000132B",
        "out_true":"locret_10001348",
        "out_false":"label_25",
        "last_inst":"jz",
        "instructions":[
          { "str":"call    sub_10001EDA" },
          { "str":"mov     eax, dwTlsIndex" },
          { "str":"cmp     eax, 0FFFFFFFFh" },
          { "str":"jz      short locret_10001348" }
        ],
        "callees":[
          { "tag":"sub_10001EDA" }
        ]
      },
{
        "tag":"label_25",
        "label":"label_25",
        "out_true":"locret_10001348",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    eax" },
          { "str":"call    ds:TlsFree" },
          { "str":"or      dwTlsIndex, 0FFFFFFFFh" }
        ],
        "callees":[
          { "tag":"ds_TlsFree" }
        ]
      },
{
        "tag":"locret_10001348",
        "label":"locret_10001348",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10001349",
    "label":"sub_10001349",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_10001349",
        "label":"sub_10001349",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, [esp+arg_0]" },
          { "str":"mov     dword ptr [eax+50h], offset unk_100061B0" },
          { "str":"mov     dword ptr [eax+14h], 1" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_1000135C",
    "label":"sub_1000135C",
    "type":"idapro",
    "callees":[
      { "tag":"ds_GetCurrentThreadId" },
      { "tag":"ds_GetLastError" },
      { "tag":"ds_SetLastError" },
      { "tag":"ds_TlsGetValue" },
      { "tag":"ds_TlsSetValue" },
      { "tag":"sub_10001186" },
      { "tag":"sub_10001349" },
      { "tag":"sub_10001FBC" }
    ],
    "blocks":[
      {
        "tag":"sub_1000135C",
        "label":"sub_1000135C",
        "out_true":"loc_100013B7",
        "out_false":"label_26",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"call    ds:GetLastError" },
          { "str":"push    dwTlsIndex" },
          { "str":"mov     edi, eax" },
          { "str":"call    ds:TlsGetValue" },
          { "str":"mov     esi, eax" },
          { "str":"test    esi, esi" },
          { "str":"jnz     short loc_100013B7" }
        ],
        "callees":[
          { "tag":"ds_GetLastError" },
          { "tag":"ds_TlsGetValue" }
        ]
      },
{
        "tag":"label_26",
        "label":"label_26",
        "out_true":"loc_100013AF",
        "out_false":"label_27",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    74h" },
          { "str":"push    1" },
          { "str":"call    sub_10001FBC" },
          { "str":"mov     esi, eax" },
          { "str":"pop     ecx" },
          { "str":"test    esi, esi" },
          { "str":"pop     ecx" },
          { "str":"jz      short loc_100013AF" }
        ],
        "callees":[
          { "tag":"sub_10001FBC" }
        ]
      },
{
        "tag":"label_27",
        "label":"label_27",
        "out_true":"loc_100013AF",
        "out_false":"label_28",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    esi" },
          { "str":"push    dwTlsIndex" },
          { "str":"call    ds:TlsSetValue" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_100013AF" }
        ],
        "callees":[
          { "tag":"ds_TlsSetValue" }
        ]
      },
{
        "tag":"label_28",
        "label":"label_28",
        "out_true":"loc_100013B7",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    esi" },
          { "str":"call    sub_10001349" },
          { "str":"pop     ecx" },
          { "str":"call    ds:GetCurrentThreadId" },
          { "str":"or      dword ptr [esi+4], 0FFFFFFFFh" },
          { "str":"mov     [esi], eax" },
          { "str":"jmp     short loc_100013B7" }
        ],
        "callees":[
          { "tag":"ds_GetCurrentThreadId" },
          { "tag":"sub_10001349" }
        ]
      },
{
        "tag":"loc_100013AF",
        "label":"loc_100013AF",
        "out_true":"loc_100013B7",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    10h" },
          { "str":"call    sub_10001186" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_10001186" }
        ]
      },
{
        "tag":"loc_100013B7",
        "label":"loc_100013B7",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    edi" },
          { "str":"call    ds:SetLastError" },
          { "str":"mov     eax, esi" },
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"ds_SetLastError" }
        ]
      }
    ]
  },{
    "tag":"sub_100013C3",
    "label":"sub_100013C3",
    "type":"idapro",
    "callees":[
      { "tag":"ds_TlsGetValue" },
      { "tag":"ds_TlsSetValue" },
      { "tag":"sub_100020F9" }
    ],
    "blocks":[
      {
        "tag":"sub_100013C3",
        "label":"sub_100013C3",
        "out_true":"locret_10001462",
        "out_false":"label_29",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, dwTlsIndex" },
          { "str":"cmp     eax, 0FFFFFFFFh" },
          { "str":"jz      locret_10001462" }
        ],
        "callees":[]
      },
{
        "tag":"label_29",
        "label":"label_29",
        "out_true":"loc_100013E7",
        "out_false":"label_30",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    esi" },
          { "str":"mov     esi, [esp+4+arg_0]" },
          { "str":"test    esi, esi" },
          { "str":"jnz     short loc_100013E7" }
        ],
        "callees":[]
      },
{
        "tag":"label_30",
        "label":"label_30",
        "out_true":"loc_10001453",
        "out_false":"loc_100013E7",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    eax" },
          { "str":"call    ds:TlsGetValue" },
          { "str":"mov     esi, eax" },
          { "str":"test    esi, esi" },
          { "str":"jz      short loc_10001453" }
        ],
        "callees":[
          { "tag":"ds_TlsGetValue" }
        ]
      },
{
        "tag":"loc_100013E7",
        "label":"loc_100013E7",
        "out_true":"loc_100013F5",
        "out_false":"label_31",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [esi+24h]" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_100013F5" }
        ],
        "callees":[]
      },
{
        "tag":"label_31",
        "label":"label_31",
        "out_true":"loc_100013F5",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    eax" },
          { "str":"call    sub_100020F9" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_100020F9" }
        ]
      },
{
        "tag":"loc_100013F5",
        "label":"loc_100013F5",
        "out_true":"loc_10001403",
        "out_false":"label_32",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [esi+28h]" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10001403" }
        ],
        "callees":[]
      },
{
        "tag":"label_32",
        "label":"label_32",
        "out_true":"loc_10001403",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    eax" },
          { "str":"call    sub_100020F9" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_100020F9" }
        ]
      },
{
        "tag":"loc_10001403",
        "label":"loc_10001403",
        "out_true":"loc_10001411",
        "out_false":"label_33",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [esi+30h]" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10001411" }
        ],
        "callees":[]
      },
{
        "tag":"label_33",
        "label":"label_33",
        "out_true":"loc_10001411",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    eax" },
          { "str":"call    sub_100020F9" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_100020F9" }
        ]
      },
{
        "tag":"loc_10001411",
        "label":"loc_10001411",
        "out_true":"loc_1000141F",
        "out_false":"label_34",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [esi+38h]" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_1000141F" }
        ],
        "callees":[]
      },
{
        "tag":"label_34",
        "label":"label_34",
        "out_true":"loc_1000141F",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    eax" },
          { "str":"call    sub_100020F9" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_100020F9" }
        ]
      },
{
        "tag":"loc_1000141F",
        "label":"loc_1000141F",
        "out_true":"loc_1000142D",
        "out_false":"label_35",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [esi+40h]" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_1000142D" }
        ],
        "callees":[]
      },
{
        "tag":"label_35",
        "label":"label_35",
        "out_true":"loc_1000142D",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    eax" },
          { "str":"call    sub_100020F9" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_100020F9" }
        ]
      },
{
        "tag":"loc_1000142D",
        "label":"loc_1000142D",
        "out_true":"loc_1000143B",
        "out_false":"label_36",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [esi+44h]" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_1000143B" }
        ],
        "callees":[]
      },
{
        "tag":"label_36",
        "label":"label_36",
        "out_true":"loc_1000143B",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    eax" },
          { "str":"call    sub_100020F9" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_100020F9" }
        ]
      },
{
        "tag":"loc_1000143B",
        "label":"loc_1000143B",
        "out_true":"loc_1000144C",
        "out_false":"label_37",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [esi+50h]" },
          { "str":"cmp     eax, offset unk_100061B0" },
          { "str":"jz      short loc_1000144C" }
        ],
        "callees":[]
      },
{
        "tag":"label_37",
        "label":"label_37",
        "out_true":"loc_1000144C",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    eax" },
          { "str":"call    sub_100020F9" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_100020F9" }
        ]
      },
{
        "tag":"loc_1000144C",
        "label":"loc_1000144C",
        "out_true":"loc_10001453",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    esi" },
          { "str":"call    sub_100020F9" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_100020F9" }
        ]
      },
{
        "tag":"loc_10001453",
        "label":"loc_10001453",
        "out_true":"locret_10001462",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    0" },
          { "str":"push    dwTlsIndex" },
          { "str":"call    ds:TlsSetValue" },
          { "str":"pop     esi" }
        ],
        "callees":[
          { "tag":"ds_TlsSetValue" }
        ]
      },
{
        "tag":"locret_10001462",
        "label":"locret_10001462",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10001463",
    "label":"sub_10001463",
    "type":"idapro",
    "callees":[
      { "tag":"ds_GetFileType" },
      { "tag":"ds_GetStartupInfoA" },
      { "tag":"ds_GetStdHandle" },
      { "tag":"ds_SetHandleCount" },
      { "tag":"sub_10001186" },
      { "tag":"sub_100021E2" }
    ],
    "blocks":[
      {
        "tag":"sub_10001463",
        "label":"sub_10001463",
        "out_true":"loc_10001485",
        "out_false":"label_38",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"sub     esp, 48h" },
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"push    480h" },
          { "str":"call    sub_100021E2" },
          { "str":"mov     esi, eax" },
          { "str":"pop     ecx" },
          { "str":"test    esi, esi" },
          { "str":"jnz     short loc_10001485" }
        ],
        "callees":[
          { "tag":"sub_100021E2" }
        ]
      },
{
        "tag":"label_38",
        "label":"label_38",
        "out_true":"loc_10001485",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    1Bh" },
          { "str":"call    sub_10001186" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_10001186" }
        ]
      },
{
        "tag":"loc_10001485",
        "label":"loc_10001485",
        "out_true":"loc_1000149B",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     dword_10009000, esi" },
          { "str":"mov     uNumber, 20h" },
          { "str":"lea     eax, [esi+480h]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000149B",
        "label":"loc_1000149B",
        "out_true":"loc_100014BD",
        "out_false":"label_39",
        "last_inst":"jnb",
        "instructions":[
          { "str":"cmp     esi, eax" },
          { "str":"jnb     short loc_100014BD" }
        ],
        "callees":[]
      },
{
        "tag":"label_39",
        "label":"label_39",
        "out_true":"loc_1000149B",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"and     byte ptr [esi+4], 0" },
          { "str":"or      dword ptr [esi], 0FFFFFFFFh" },
          { "str":"and     dword ptr [esi+8], 0" },
          { "str":"mov     byte ptr [esi+5], 0Ah" },
          { "str":"mov     eax, dword_10009000" },
          { "str":"add     esi, 24h" },
          { "str":"add     eax, 480h" },
          { "str":"jmp     short loc_1000149B" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100014BD",
        "label":"loc_100014BD",
        "out_true":"loc_100015A3",
        "out_false":"label_40",
        "last_inst":"jz",
        "instructions":[
          { "str":"lea     eax, [ebp+StartupInfo]" },
          { "str":"push    eax" },
          { "str":"call    ds:GetStartupInfoA" },
          { "str":"cmp     [ebp+StartupInfo.cbReserved2], 0" },
          { "str":"jz      loc_100015A3" }
        ],
        "callees":[
          { "tag":"ds_GetStartupInfoA" }
        ]
      },
{
        "tag":"label_40",
        "label":"label_40",
        "out_true":"loc_100015A3",
        "out_false":"label_41",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [ebp+StartupInfo.lpReserved2]" },
          { "str":"test    eax, eax" },
          { "str":"jz      loc_100015A3" }
        ],
        "callees":[]
      },
{
        "tag":"label_41",
        "label":"label_41",
        "out_true":"loc_100014F3",
        "out_false":"label_42",
        "last_inst":"jl",
        "instructions":[
          { "str":"mov     edi, [eax]" },
          { "str":"lea     ebx, [eax+4]" },
          { "str":"lea     eax, [ebx+edi]" },
          { "str":"mov     [ebp+var_4], eax" },
          { "str":"mov     eax, 800h" },
          { "str":"cmp     edi, eax" },
          { "str":"jl      short loc_100014F3" }
        ],
        "callees":[]
      },
{
        "tag":"label_42",
        "label":"label_42",
        "out_true":"loc_100014F3",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     edi, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100014F3",
        "label":"loc_100014F3",
        "out_true":"loc_10001551",
        "out_false":"label_43",
        "last_inst":"jg",
        "instructions":[
          { "str":"cmp     uNumber, edi" },
          { "str":"jge     short loc_10001551" }
        ],
        "callees":[]
      },
{
        "tag":"label_43",
        "label":"label_43",
        "out_true":"loc_10001500",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     esi, offset unk_10009004" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001500",
        "label":"loc_10001500",
        "out_true":"loc_1000154B",
        "out_false":"label_44",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    480h" },
          { "str":"call    sub_100021E2" },
          { "str":"test    eax, eax" },
          { "str":"pop     ecx" },
          { "str":"jz      short loc_1000154B" }
        ],
        "callees":[
          { "tag":"sub_100021E2" }
        ]
      },
{
        "tag":"label_44",
        "label":"label_44",
        "out_true":"loc_1000151E",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"add     uNumber, 20h" },
          { "str":"mov     [esi], eax" },
          { "str":"lea     ecx, [eax+480h]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000151E",
        "label":"loc_1000151E",
        "out_true":"loc_1000153E",
        "out_false":"label_45",
        "last_inst":"jnb",
        "instructions":[
          { "str":"cmp     eax, ecx" },
          { "str":"jnb     short loc_1000153E" }
        ],
        "callees":[]
      },
{
        "tag":"label_45",
        "label":"label_45",
        "out_true":"loc_1000151E",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"and     byte ptr [eax+4], 0" },
          { "str":"or      dword ptr [eax], 0FFFFFFFFh" },
          { "str":"and     dword ptr [eax+8], 0" },
          { "str":"mov     byte ptr [eax+5], 0Ah" },
          { "str":"mov     ecx, [esi]" },
          { "str":"add     eax, 24h" },
          { "str":"add     ecx, 480h" },
          { "str":"jmp     short loc_1000151E" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000153E",
        "label":"loc_1000153E",
        "out_true":"loc_10001500",
        "out_false":"label_46",
        "last_inst":"jl",
        "instructions":[
          { "str":"add     esi, 4" },
          { "str":"cmp     uNumber, edi" },
          { "str":"jl      short loc_10001500" }
        ],
        "callees":[]
      },
{
        "tag":"label_46",
        "label":"label_46",
        "out_true":"loc_10001551",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     short loc_10001551" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000154B",
        "label":"loc_1000154B",
        "out_true":"loc_10001551",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     edi, uNumber" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001551",
        "label":"loc_10001551",
        "out_true":"loc_100015A3",
        "out_false":"loc_10001557",
        "last_inst":"jl",
        "instructions":[
          { "str":"xor     esi, esi" },
          { "str":"test    edi, edi" },
          { "str":"jle     short loc_100015A3" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001557",
        "label":"loc_10001557",
        "out_true":"loc_10001599",
        "out_false":"label_47",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [ebp+var_4]" },
          { "str":"mov     ecx, [eax]" },
          { "str":"cmp     ecx, 0FFFFFFFFh" },
          { "str":"jz      short loc_10001599" }
        ],
        "callees":[]
      },
{
        "tag":"label_47",
        "label":"label_47",
        "out_true":"loc_10001599",
        "out_false":"label_48",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     al, [ebx]" },
          { "str":"test    al, 1" },
          { "str":"jz      short loc_10001599" }
        ],
        "callees":[]
      },
{
        "tag":"label_48",
        "label":"label_48",
        "out_true":"loc_10001576",
        "out_false":"label_49",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    al, 8" },
          { "str":"jnz     short loc_10001576" }
        ],
        "callees":[]
      },
{
        "tag":"label_49",
        "label":"label_49",
        "out_true":"loc_10001599",
        "out_false":"loc_10001576",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    ecx" },
          { "str":"call    ds:GetFileType" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10001599" }
        ],
        "callees":[
          { "tag":"ds_GetFileType" }
        ]
      },
{
        "tag":"loc_10001576",
        "label":"loc_10001576",
        "out_true":"loc_10001599",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ecx, esi" },
          { "str":"mov     eax, esi" },
          { "str":"sar     ecx, 5" },
          { "str":"and     eax, 1Fh" },
          { "str":"mov     ecx, dword_10009000[ecx*4]" },
          { "str":"lea     eax, [eax+eax*8]" },
          { "str":"lea     eax, [ecx+eax*4]" },
          { "str":"mov     ecx, [ebp+var_4]" },
          { "str":"mov     ecx, [ecx]" },
          { "str":"mov     [eax], ecx" },
          { "str":"mov     cl, [ebx]" },
          { "str":"mov     [eax+4], cl" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001599",
        "label":"loc_10001599",
        "out_true":"loc_10001557",
        "out_false":"loc_100015A3",
        "last_inst":"jl",
        "instructions":[
          { "str":"add     [ebp+var_4], 4" },
          { "str":"inc     esi" },
          { "str":"inc     ebx" },
          { "str":"cmp     esi, edi" },
          { "str":"jl      short loc_10001557" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100015A3",
        "label":"loc_100015A3",
        "out_true":"loc_100015A5",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     ebx, ebx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100015A5",
        "label":"loc_100015A5",
        "out_true":"loc_10001604",
        "out_false":"label_50",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ecx, dword_10009000" },
          { "str":"lea     eax, [ebx+ebx*8]" },
          { "str":"cmp     dword ptr [ecx+eax*4], 0FFFFFFFFh" },
          { "str":"lea     esi, [ecx+eax*4]" },
          { "str":"jnz     short loc_10001604" }
        ],
        "callees":[]
      },
{
        "tag":"label_50",
        "label":"label_50",
        "out_true":"loc_100015C4",
        "out_false":"label_51",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    ebx, ebx" },
          { "str":"mov     byte ptr [esi+4], 81h" },
          { "str":"jnz     short loc_100015C4" }
        ],
        "callees":[]
      },
{
        "tag":"label_51",
        "label":"label_51",
        "out_true":"loc_100015CE",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    0FFFFFFF6h" },
          { "str":"pop     eax" },
          { "str":"jmp     short loc_100015CE" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100015C4",
        "label":"loc_100015C4",
        "out_true":"loc_100015CE",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, ebx" },
          { "str":"dec     eax" },
          { "str":"neg     eax" },
          { "str":"sbb     eax, eax" },
          { "str":"add     eax, 0FFFFFFF5h" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100015CE",
        "label":"loc_100015CE",
        "out_true":"loc_100015F3",
        "out_false":"label_52",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    eax" },
          { "str":"call    ds:GetStdHandle" },
          { "str":"mov     edi, eax" },
          { "str":"cmp     edi, 0FFFFFFFFh" },
          { "str":"jz      short loc_100015F3" }
        ],
        "callees":[
          { "tag":"ds_GetStdHandle" }
        ]
      },
{
        "tag":"label_52",
        "label":"label_52",
        "out_true":"loc_100015F3",
        "out_false":"label_53",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    edi" },
          { "str":"call    ds:GetFileType" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_100015F3" }
        ],
        "callees":[
          { "tag":"ds_GetFileType" }
        ]
      },
{
        "tag":"label_53",
        "label":"label_53",
        "out_true":"loc_100015F9",
        "out_false":"loc_100015F3",
        "last_inst":"jnz",
        "instructions":[
          { "str":"and     eax, 0FFh" },
          { "str":"mov     [esi], edi" },
          { "str":"cmp     eax, 2" },
          { "str":"jnz     short loc_100015F9" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100015F3",
        "label":"loc_100015F3",
        "out_true":"loc_10001608",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"or      byte ptr [esi+4], 40h" },
          { "str":"jmp     short loc_10001608" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100015F9",
        "label":"loc_100015F9",
        "out_true":"loc_10001608",
        "out_false":"label_54",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     eax, 3" },
          { "str":"jnz     short loc_10001608" }
        ],
        "callees":[]
      },
{
        "tag":"label_54",
        "label":"label_54",
        "out_true":"loc_10001608",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"or      byte ptr [esi+4], 8" },
          { "str":"jmp     short loc_10001608" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001604",
        "label":"loc_10001604",
        "out_true":"loc_10001608",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"or      byte ptr [esi+4], 80h" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001608",
        "label":"loc_10001608",
        "out_true":"loc_100015A5",
        "out_false":"label_55",
        "last_inst":"jl",
        "instructions":[
          { "str":"inc     ebx" },
          { "str":"cmp     ebx, 3" },
          { "str":"jl      short loc_100015A5" }
        ],
        "callees":[]
      },
{
        "tag":"label_55",
        "label":"label_55",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    uNumber" },
          { "str":"call    ds:SetHandleCount" },
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"ds_SetHandleCount" }
        ]
      }
    ]
  },{
    "tag":"sub_1000161F",
    "label":"sub_1000161F",
    "type":"idapro",
    "callees":[
      { "tag":"ds_DeleteCriticalSection" },
      { "tag":"sub_100020F9" }
    ],
    "blocks":[
      {
        "tag":"sub_1000161F",
        "label":"sub_1000161F",
        "out_true":"loc_10001627",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"mov     esi, offset dword_10009000" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001627",
        "label":"loc_10001627",
        "out_true":"loc_10001664",
        "out_false":"label_56",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [esi]" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10001664" }
        ],
        "callees":[]
      },
{
        "tag":"label_56",
        "label":"label_56",
        "out_true":"loc_10001659",
        "out_false":"label_57",
        "last_inst":"jnb",
        "instructions":[
          { "str":"mov     edi, eax" },
          { "str":"add     eax, 480h" },
          { "str":"cmp     edi, eax" },
          { "str":"jnb     short loc_10001659" }
        ],
        "callees":[]
      },
{
        "tag":"label_57",
        "label":"label_57",
        "out_true":"loc_1000163B",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"lea     ebx, [edi+0Ch]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000163B",
        "label":"loc_1000163B",
        "out_true":"loc_10001648",
        "out_false":"label_58",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     dword ptr [ebx-4], 0" },
          { "str":"jz      short loc_10001648" }
        ],
        "callees":[]
      },
{
        "tag":"label_58",
        "label":"label_58",
        "out_true":"loc_10001648",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"call    ds:DeleteCriticalSection" }
        ],
        "callees":[
          { "tag":"ds_DeleteCriticalSection" }
        ]
      },
{
        "tag":"loc_10001648",
        "label":"loc_10001648",
        "out_true":"loc_1000163B",
        "out_false":"loc_10001659",
        "last_inst":"jb",
        "instructions":[
          { "str":"mov     eax, [esi]" },
          { "str":"add     edi, 24h" },
          { "str":"add     eax, 480h" },
          { "str":"add     ebx, 24h" },
          { "str":"cmp     edi, eax" },
          { "str":"jb      short loc_1000163B" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001659",
        "label":"loc_10001659",
        "out_true":"loc_10001664",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    dword ptr [esi]" },
          { "str":"call    sub_100020F9" },
          { "str":"and     dword ptr [esi], 0" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_100020F9" }
        ]
      },
{
        "tag":"loc_10001664",
        "label":"loc_10001664",
        "out_true":"loc_10001627",
        "out_false":"label_59",
        "last_inst":"jl",
        "instructions":[
          { "str":"add     esi, 4" },
          { "str":"cmp     esi, offset uNumber" },
          { "str":"jl      short loc_10001627" }
        ],
        "callees":[]
      },
{
        "tag":"label_59",
        "label":"label_59",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10001673",
    "label":"sub_10001673",
    "type":"idapro",
    "callees":[
      { "tag":"sub_10001186" },
      { "tag":"sub_100020F9" },
      { "tag":"sub_100021E2" },
      { "tag":"sub_10002320" },
      { "tag":"sub_10002410" },
      { "tag":"sub_10002863" }
    ],
    "blocks":[
      {
        "tag":"sub_10001673",
        "label":"sub_10001673",
        "out_true":"loc_10001685",
        "out_false":"label_60",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"xor     ebx, ebx" },
          { "str":"cmp     dword_10009108, ebx" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"jnz     short loc_10001685" }
        ],
        "callees":[]
      },
{
        "tag":"label_60",
        "label":"label_60",
        "out_true":"loc_10001685",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"call    sub_10002863" }
        ],
        "callees":[
          { "tag":"sub_10002863" }
        ]
      },
{
        "tag":"loc_10001685",
        "label":"loc_10001685",
        "out_true":"loc_1000168D",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     esi, dword_10008A3C" },
          { "str":"xor     edi, edi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000168D",
        "label":"loc_1000168D",
        "out_true":"loc_100016A5",
        "out_false":"label_61",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     al, [esi]" },
          { "str":"cmp     al, bl" },
          { "str":"jz      short loc_100016A5" }
        ],
        "callees":[]
      },
{
        "tag":"label_61",
        "label":"label_61",
        "out_true":"loc_10001698",
        "out_false":"label_62",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     al, 3Dh" },
          { "str":"jz      short loc_10001698" }
        ],
        "callees":[]
      },
{
        "tag":"label_62",
        "label":"label_62",
        "out_true":"loc_10001698",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"inc     edi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001698",
        "label":"loc_10001698",
        "out_true":"loc_1000168D",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    esi" },
          { "str":"call    sub_10002410" },
          { "str":"pop     ecx" },
          { "str":"lea     esi, [esi+eax+1]" },
          { "str":"jmp     short loc_1000168D" }
        ],
        "callees":[
          { "tag":"sub_10002410" }
        ]
      },
{
        "tag":"loc_100016A5",
        "label":"loc_100016A5",
        "out_true":"loc_100016C7",
        "out_false":"label_63",
        "last_inst":"jnz",
        "instructions":[
          { "str":"lea     eax, ds:4[edi*4]" },
          { "str":"push    eax" },
          { "str":"call    sub_100021E2" },
          { "str":"mov     esi, eax" },
          { "str":"pop     ecx" },
          { "str":"cmp     esi, ebx" },
          { "str":"mov     dword_10008A6C, esi" },
          { "str":"jnz     short loc_100016C7" }
        ],
        "callees":[
          { "tag":"sub_100021E2" }
        ]
      },
{
        "tag":"label_63",
        "label":"label_63",
        "out_true":"loc_100016C7",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    9" },
          { "str":"call    sub_10001186" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_10001186" }
        ]
      },
{
        "tag":"loc_100016C7",
        "label":"loc_100016C7",
        "out_true":"loc_1000170A",
        "out_false":"label_64",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     edi, dword_10008A3C" },
          { "str":"cmp     [edi], bl" },
          { "str":"jz      short loc_1000170A" }
        ],
        "callees":[]
      },
{
        "tag":"label_64",
        "label":"label_64",
        "out_true":"loc_100016D2",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ebp" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100016D2",
        "label":"loc_100016D2",
        "out_true":"loc_10001703",
        "out_false":"label_65",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    edi" },
          { "str":"call    sub_10002410" },
          { "str":"mov     ebp, eax" },
          { "str":"pop     ecx" },
          { "str":"inc     ebp" },
          { "str":"cmp     byte ptr [edi], 3Dh" },
          { "str":"jz      short loc_10001703" }
        ],
        "callees":[
          { "tag":"sub_10002410" }
        ]
      },
{
        "tag":"label_65",
        "label":"label_65",
        "out_true":"loc_100016F6",
        "out_false":"label_66",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"call    sub_100021E2" },
          { "str":"cmp     eax, ebx" },
          { "str":"pop     ecx" },
          { "str":"mov     [esi], eax" },
          { "str":"jnz     short loc_100016F6" }
        ],
        "callees":[
          { "tag":"sub_100021E2" }
        ]
      },
{
        "tag":"label_66",
        "label":"label_66",
        "out_true":"loc_100016F6",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    9" },
          { "str":"call    sub_10001186" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_10001186" }
        ]
      },
{
        "tag":"loc_100016F6",
        "label":"loc_100016F6",
        "out_true":"loc_10001703",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    edi" },
          { "str":"push    dword ptr [esi]" },
          { "str":"call    sub_10002320" },
          { "str":"pop     ecx" },
          { "str":"add     esi, 4" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_10002320" }
        ]
      },
{
        "tag":"loc_10001703",
        "label":"loc_10001703",
        "out_true":"loc_100016D2",
        "out_false":"label_67",
        "last_inst":"jnz",
        "instructions":[
          { "str":"add     edi, ebp" },
          { "str":"cmp     [edi], bl" },
          { "str":"jnz     short loc_100016D2" }
        ],
        "callees":[]
      },
{
        "tag":"label_67",
        "label":"label_67",
        "out_true":"loc_1000170A",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"pop     ebp" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000170A",
        "label":"loc_1000170A",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    dword_10008A3C" },
          { "str":"call    sub_100020F9" },
          { "str":"pop     ecx" },
          { "str":"mov     dword_10008A3C, ebx" },
          { "str":"mov     [esi], ebx" },
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"mov     dword_10009104, 1" },
          { "str":"pop     ebx" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"sub_100020F9" }
        ]
      }
    ]
  },{
    "tag":"sub_1000172C",
    "label":"sub_1000172C",
    "type":"idapro",
    "callees":[
      { "tag":"ds_GetModuleFileNameA" },
      { "tag":"sub_10001186" },
      { "tag":"sub_100017C5" },
      { "tag":"sub_100021E2" },
      { "tag":"sub_10002863" }
    ],
    "blocks":[
      {
        "tag":"sub_1000172C",
        "label":"sub_1000172C",
        "out_true":"loc_10001743",
        "out_false":"label_68",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    ecx" },
          { "str":"push    ecx" },
          { "str":"push    ebx" },
          { "str":"xor     ebx, ebx" },
          { "str":"cmp     dword_10009108, ebx" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"jnz     short loc_10001743" }
        ],
        "callees":[]
      },
{
        "tag":"label_68",
        "label":"label_68",
        "out_true":"loc_10001743",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"call    sub_10002863" }
        ],
        "callees":[
          { "tag":"sub_10002863" }
        ]
      },
{
        "tag":"loc_10001743",
        "label":"loc_10001743",
        "out_true":"loc_10001768",
        "out_false":"label_69",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     esi, offset Filename" },
          { "str":"push    104h" },
          { "str":"push    esi" },
          { "str":"push    ebx" },
          { "str":"call    ds:GetModuleFileNameA" },
          { "str":"mov     eax, dword_10009118" },
          { "str":"mov     dword_10008A7C, esi" },
          { "str":"mov     edi, esi" },
          { "str":"cmp     [eax], bl" },
          { "str":"jz      short loc_10001768" }
        ],
        "callees":[
          { "tag":"ds_GetModuleFileNameA" }
        ]
      },
{
        "tag":"label_69",
        "label":"label_69",
        "out_true":"loc_10001768",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     edi, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001768",
        "label":"loc_10001768",
        "out_true":"loc_10001798",
        "out_false":"label_70",
        "last_inst":"jnz",
        "instructions":[
          { "str":"lea     eax, [ebp+var_8]" },
          { "str":"push    eax" },
          { "str":"lea     eax, [ebp+var_4]" },
          { "str":"push    eax" },
          { "str":"push    ebx" },
          { "str":"push    ebx" },
          { "str":"push    edi" },
          { "str":"call    sub_100017C5" },
          { "str":"mov     eax, [ebp+var_8]" },
          { "str":"mov     ecx, [ebp+var_4]" },
          { "str":"lea     eax, [eax+ecx*4]" },
          { "str":"push    eax" },
          { "str":"call    sub_100021E2" },
          { "str":"mov     esi, eax" },
          { "str":"add     esp, 18h" },
          { "str":"cmp     esi, ebx" },
          { "str":"jnz     short loc_10001798" }
        ],
        "callees":[
          { "tag":"sub_100017C5" },
          { "tag":"sub_100021E2" }
        ]
      },
{
        "tag":"label_70",
        "label":"label_70",
        "out_true":"loc_10001798",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    8" },
          { "str":"call    sub_10001186" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_10001186" }
        ]
      },
{
        "tag":"loc_10001798",
        "label":"loc_10001798",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"lea     eax, [ebp+var_8]" },
          { "str":"push    eax" },
          { "str":"lea     eax, [ebp+var_4]" },
          { "str":"push    eax" },
          { "str":"mov     eax, [ebp+var_4]" },
          { "str":"lea     eax, [esi+eax*4]" },
          { "str":"push    eax" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"call    sub_100017C5" },
          { "str":"mov     eax, [ebp+var_4]" },
          { "str":"add     esp, 14h" },
          { "str":"dec     eax" },
          { "str":"mov     dword_10008A64, esi" },
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"mov     dword_10008A60, eax" },
          { "str":"pop     ebx" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"sub_100017C5" }
        ]
      }
    ]
  },{
    "tag":"sub_100017C5",
    "label":"sub_100017C5",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_100017C5",
        "label":"sub_100017C5",
        "out_true":"loc_100017EF",
        "out_false":"label_71",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"mov     ecx, [ebp+arg_10]" },
          { "str":"mov     eax, [ebp+arg_C]" },
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"and     dword ptr [ecx], 0" },
          { "str":"mov     esi, [ebp+arg_8]" },
          { "str":"push    edi" },
          { "str":"mov     edi, [ebp+arg_4]" },
          { "str":"mov     dword ptr [eax], 1" },
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"test    edi, edi" },
          { "str":"jz      short loc_100017EF" }
        ],
        "callees":[]
      },
{
        "tag":"label_71",
        "label":"label_71",
        "out_true":"loc_100017EF",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     [edi], esi" },
          { "str":"add     edi, 4" },
          { "str":"mov     [ebp+arg_4], edi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100017EF",
        "label":"loc_100017EF",
        "out_true":"loc_10001838",
        "out_false":"loc_100017F4",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     byte ptr [eax], 22h" },
          { "str":"jnz     short loc_10001838" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100017F4",
        "label":"loc_100017F4",
        "out_true":"loc_10001826",
        "out_false":"label_72",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     dl, [eax+1]" },
          { "str":"inc     eax" },
          { "str":"cmp     dl, 22h" },
          { "str":"jz      short loc_10001826" }
        ],
        "callees":[]
      },
{
        "tag":"label_72",
        "label":"label_72",
        "out_true":"loc_10001826",
        "out_false":"label_73",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    dl, dl" },
          { "str":"jz      short loc_10001826" }
        ],
        "callees":[]
      },
{
        "tag":"label_73",
        "label":"label_73",
        "out_true":"loc_10001819",
        "out_false":"label_74",
        "last_inst":"jz",
        "instructions":[
          { "str":"movzx   edx, dl" },
          { "str":"test    byte_10008EE1[edx], 4" },
          { "str":"jz      short loc_10001819" }
        ],
        "callees":[]
      },
{
        "tag":"label_74",
        "label":"label_74",
        "out_true":"loc_10001819",
        "out_false":"label_75",
        "last_inst":"jz",
        "instructions":[
          { "str":"inc     dword ptr [ecx]" },
          { "str":"test    esi, esi" },
          { "str":"jz      short loc_10001819" }
        ],
        "callees":[]
      },
{
        "tag":"label_75",
        "label":"label_75",
        "out_true":"loc_10001819",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     dl, [eax]" },
          { "str":"mov     [esi], dl" },
          { "str":"inc     esi" },
          { "str":"inc     eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001819",
        "label":"loc_10001819",
        "out_true":"loc_100017F4",
        "out_false":"label_76",
        "last_inst":"jz",
        "instructions":[
          { "str":"inc     dword ptr [ecx]" },
          { "str":"test    esi, esi" },
          { "str":"jz      short loc_100017F4" }
        ],
        "callees":[]
      },
{
        "tag":"label_76",
        "label":"label_76",
        "out_true":"loc_100017F4",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     dl, [eax]" },
          { "str":"mov     [esi], dl" },
          { "str":"inc     esi" },
          { "str":"jmp     short loc_100017F4" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001826",
        "label":"loc_10001826",
        "out_true":"loc_10001830",
        "out_false":"label_77",
        "last_inst":"jz",
        "instructions":[
          { "str":"inc     dword ptr [ecx]" },
          { "str":"test    esi, esi" },
          { "str":"jz      short loc_10001830" }
        ],
        "callees":[]
      },
{
        "tag":"label_77",
        "label":"label_77",
        "out_true":"loc_10001830",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"and     byte ptr [esi], 0" },
          { "str":"inc     esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001830",
        "label":"loc_10001830",
        "out_true":"loc_1000187B",
        "out_false":"label_78",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     byte ptr [eax], 22h" },
          { "str":"jnz     short loc_1000187B" }
        ],
        "callees":[]
      },
{
        "tag":"label_78",
        "label":"label_78",
        "out_true":"loc_1000187B",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"inc     eax" },
          { "str":"jmp     short loc_1000187B" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001838",
        "label":"loc_10001838",
        "out_true":"loc_10001843",
        "out_false":"label_79",
        "last_inst":"jz",
        "instructions":[
          { "str":"inc     dword ptr [ecx]" },
          { "str":"test    esi, esi" },
          { "str":"jz      short loc_10001843" }
        ],
        "callees":[]
      },
{
        "tag":"label_79",
        "label":"label_79",
        "out_true":"loc_10001843",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     dl, [eax]" },
          { "str":"mov     [esi], dl" },
          { "str":"inc     esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001843",
        "label":"loc_10001843",
        "out_true":"loc_1000185E",
        "out_false":"label_80",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     dl, [eax]" },
          { "str":"inc     eax" },
          { "str":"movzx   ebx, dl" },
          { "str":"test    byte_10008EE1[ebx], 4" },
          { "str":"jz      short loc_1000185E" }
        ],
        "callees":[]
      },
{
        "tag":"label_80",
        "label":"label_80",
        "out_true":"loc_1000185D",
        "out_false":"label_81",
        "last_inst":"jz",
        "instructions":[
          { "str":"inc     dword ptr [ecx]" },
          { "str":"test    esi, esi" },
          { "str":"jz      short loc_1000185D" }
        ],
        "callees":[]
      },
{
        "tag":"label_81",
        "label":"label_81",
        "out_true":"loc_1000185D",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     bl, [eax]" },
          { "str":"mov     [esi], bl" },
          { "str":"inc     esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000185D",
        "label":"loc_1000185D",
        "out_true":"loc_1000185E",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"inc     eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000185E",
        "label":"loc_1000185E",
        "out_true":"loc_1000186C",
        "out_false":"label_82",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     dl, 20h" },
          { "str":"jz      short loc_1000186C" }
        ],
        "callees":[]
      },
{
        "tag":"label_82",
        "label":"label_82",
        "out_true":"loc_10001870",
        "out_false":"label_83",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    dl, dl" },
          { "str":"jz      short loc_10001870" }
        ],
        "callees":[]
      },
{
        "tag":"label_83",
        "label":"label_83",
        "out_true":"loc_10001838",
        "out_false":"loc_1000186C",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     dl, 9" },
          { "str":"jnz     short loc_10001838" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000186C",
        "label":"loc_1000186C",
        "out_true":"loc_10001873",
        "out_false":"loc_10001870",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    dl, dl" },
          { "str":"jnz     short loc_10001873" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001870",
        "label":"loc_10001870",
        "out_true":"loc_1000187B",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"dec     eax" },
          { "str":"jmp     short loc_1000187B" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001873",
        "label":"loc_10001873",
        "out_true":"loc_1000187B",
        "out_false":"label_84",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    esi, esi" },
          { "str":"jz      short loc_1000187B" }
        ],
        "callees":[]
      },
{
        "tag":"label_84",
        "label":"label_84",
        "out_true":"loc_1000187B",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"and     byte ptr [esi-1], 0" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000187B",
        "label":"loc_1000187B",
        "out_true":"loc_1000187F",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"and     [ebp+arg_10], 0" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000187F",
        "label":"loc_1000187F",
        "out_true":"loc_10001968",
        "out_false":"loc_10001888",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     byte ptr [eax], 0" },
          { "str":"jz      loc_10001968" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001888",
        "label":"loc_10001888",
        "out_true":"loc_10001894",
        "out_false":"label_85",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     dl, [eax]" },
          { "str":"cmp     dl, 20h" },
          { "str":"jz      short loc_10001894" }
        ],
        "callees":[]
      },
{
        "tag":"label_85",
        "label":"label_85",
        "out_true":"loc_10001897",
        "out_false":"loc_10001894",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     dl, 9" },
          { "str":"jnz     short loc_10001897" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001894",
        "label":"loc_10001894",
        "out_true":"loc_10001888",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"inc     eax" },
          { "str":"jmp     short loc_10001888" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001897",
        "label":"loc_10001897",
        "out_true":"loc_10001968",
        "out_false":"label_86",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     byte ptr [eax], 0" },
          { "str":"jz      loc_10001968" }
        ],
        "callees":[]
      },
{
        "tag":"label_86",
        "label":"label_86",
        "out_true":"loc_100018AC",
        "out_false":"label_87",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    edi, edi" },
          { "str":"jz      short loc_100018AC" }
        ],
        "callees":[]
      },
{
        "tag":"label_87",
        "label":"label_87",
        "out_true":"loc_100018AC",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     [edi], esi" },
          { "str":"add     edi, 4" },
          { "str":"mov     [ebp+arg_4], edi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100018AC",
        "label":"loc_100018AC",
        "out_true":"loc_100018B1",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     edx, [ebp+arg_C]" },
          { "str":"inc     dword ptr [edx]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100018B1",
        "label":"loc_100018B1",
        "out_true":"loc_100018BA",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     [ebp+arg_0], 1" },
          { "str":"xor     ebx, ebx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100018BA",
        "label":"loc_100018BA",
        "out_true":"loc_100018C3",
        "out_false":"label_88",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     byte ptr [eax], 5Ch" },
          { "str":"jnz     short loc_100018C3" }
        ],
        "callees":[]
      },
{
        "tag":"label_88",
        "label":"label_88",
        "out_true":"loc_100018BA",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"inc     eax" },
          { "str":"inc     ebx" },
          { "str":"jmp     short loc_100018BA" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100018C3",
        "label":"loc_100018C3",
        "out_true":"loc_100018F4",
        "out_false":"label_89",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     byte ptr [eax], 22h" },
          { "str":"jnz     short loc_100018F4" }
        ],
        "callees":[]
      },
{
        "tag":"label_89",
        "label":"label_89",
        "out_true":"loc_100018F2",
        "out_false":"label_90",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    bl, 1" },
          { "str":"jnz     short loc_100018F2" }
        ],
        "callees":[]
      },
{
        "tag":"label_90",
        "label":"label_90",
        "out_true":"loc_100018E1",
        "out_false":"label_91",
        "last_inst":"jz",
        "instructions":[
          { "str":"xor     edi, edi" },
          { "str":"cmp     [ebp+arg_10], edi" },
          { "str":"jz      short loc_100018E1" }
        ],
        "callees":[]
      },
{
        "tag":"label_91",
        "label":"label_91",
        "out_true":"loc_100018E1",
        "out_false":"label_92",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     byte ptr [eax+1], 22h" },
          { "str":"lea     edx, [eax+1]" },
          { "str":"jnz     short loc_100018E1" }
        ],
        "callees":[]
      },
{
        "tag":"label_92",
        "label":"label_92",
        "out_true":"loc_100018E4",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     eax, edx" },
          { "str":"jmp     short loc_100018E4" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100018E1",
        "label":"loc_100018E1",
        "out_true":"loc_100018E4",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     [ebp+arg_0], edi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100018E4",
        "label":"loc_100018E4",
        "out_true":"loc_100018F2",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     edi, [ebp+arg_4]" },
          { "str":"xor     edx, edx" },
          { "str":"cmp     [ebp+arg_10], edx" },
          { "str":"setz    dl" },
          { "str":"mov     [ebp+arg_10], edx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100018F2",
        "label":"loc_100018F2",
        "out_true":"loc_100018F4",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"shr     ebx, 1" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100018F4",
        "label":"loc_100018F4",
        "out_true":"loc_10001909",
        "out_false":"label_93",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     edx, ebx" },
          { "str":"dec     ebx" },
          { "str":"test    edx, edx" },
          { "str":"jz      short loc_10001909" }
        ],
        "callees":[]
      },
{
        "tag":"label_93",
        "label":"label_93",
        "out_true":"loc_100018FC",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"inc     ebx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100018FC",
        "label":"loc_100018FC",
        "out_true":"loc_10001904",
        "out_false":"label_94",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    esi, esi" },
          { "str":"jz      short loc_10001904" }
        ],
        "callees":[]
      },
{
        "tag":"label_94",
        "label":"label_94",
        "out_true":"loc_10001904",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     byte ptr [esi], 5Ch" },
          { "str":"inc     esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001904",
        "label":"loc_10001904",
        "out_true":"loc_100018FC",
        "out_false":"loc_10001909",
        "last_inst":"jnz",
        "instructions":[
          { "str":"inc     dword ptr [ecx]" },
          { "str":"dec     ebx" },
          { "str":"jnz     short loc_100018FC" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001909",
        "label":"loc_10001909",
        "out_true":"loc_10001959",
        "out_false":"label_95",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     dl, [eax]" },
          { "str":"test    dl, dl" },
          { "str":"jz      short loc_10001959" }
        ],
        "callees":[]
      },
{
        "tag":"label_95",
        "label":"label_95",
        "out_true":"loc_1000191F",
        "out_false":"label_96",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     [ebp+arg_10], 0" },
          { "str":"jnz     short loc_1000191F" }
        ],
        "callees":[]
      },
{
        "tag":"label_96",
        "label":"label_96",
        "out_true":"loc_10001959",
        "out_false":"label_97",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     dl, 20h" },
          { "str":"jz      short loc_10001959" }
        ],
        "callees":[]
      },
{
        "tag":"label_97",
        "label":"label_97",
        "out_true":"loc_10001959",
        "out_false":"loc_1000191F",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     dl, 9" },
          { "str":"jz      short loc_10001959" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000191F",
        "label":"loc_1000191F",
        "out_true":"loc_10001953",
        "out_false":"label_98",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     [ebp+arg_0], 0" },
          { "str":"jz      short loc_10001953" }
        ],
        "callees":[]
      },
{
        "tag":"label_98",
        "label":"label_98",
        "out_true":"loc_10001942",
        "out_false":"label_99",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    esi, esi" },
          { "str":"jz      short loc_10001942" }
        ],
        "callees":[]
      },
{
        "tag":"label_99",
        "label":"label_99",
        "out_true":"loc_1000193B",
        "out_false":"label_100",
        "last_inst":"jz",
        "instructions":[
          { "str":"movzx   ebx, dl" },
          { "str":"test    byte_10008EE1[ebx], 4" },
          { "str":"jz      short loc_1000193B" }
        ],
        "callees":[]
      },
{
        "tag":"label_100",
        "label":"label_100",
        "out_true":"loc_1000193B",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     [esi], dl" },
          { "str":"inc     esi" },
          { "str":"inc     eax" },
          { "str":"inc     dword ptr [ecx]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000193B",
        "label":"loc_1000193B",
        "out_true":"loc_10001951",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     dl, [eax]" },
          { "str":"mov     [esi], dl" },
          { "str":"inc     esi" },
          { "str":"jmp     short loc_10001951" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001942",
        "label":"loc_10001942",
        "out_true":"loc_10001951",
        "out_false":"label_101",
        "last_inst":"jz",
        "instructions":[
          { "str":"movzx   edx, dl" },
          { "str":"test    byte_10008EE1[edx], 4" },
          { "str":"jz      short loc_10001951" }
        ],
        "callees":[]
      },
{
        "tag":"label_101",
        "label":"label_101",
        "out_true":"loc_10001951",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"inc     eax" },
          { "str":"inc     dword ptr [ecx]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001951",
        "label":"loc_10001951",
        "out_true":"loc_10001953",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"inc     dword ptr [ecx]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001953",
        "label":"loc_10001953",
        "out_true":"loc_100018B1",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"inc     eax" },
          { "str":"jmp     loc_100018B1" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001959",
        "label":"loc_10001959",
        "out_true":"loc_10001961",
        "out_false":"label_102",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    esi, esi" },
          { "str":"jz      short loc_10001961" }
        ],
        "callees":[]
      },
{
        "tag":"label_102",
        "label":"label_102",
        "out_true":"loc_10001961",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"and     byte ptr [esi], 0" },
          { "str":"inc     esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001961",
        "label":"loc_10001961",
        "out_true":"loc_1000187F",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"inc     dword ptr [ecx]" },
          { "str":"jmp     loc_1000187F" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001968",
        "label":"loc_10001968",
        "out_true":"loc_1000196F",
        "out_false":"label_103",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    edi, edi" },
          { "str":"jz      short loc_1000196F" }
        ],
        "callees":[]
      },
{
        "tag":"label_103",
        "label":"label_103",
        "out_true":"loc_1000196F",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"and     dword ptr [edi], 0" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000196F",
        "label":"loc_1000196F",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, [ebp+arg_C]" },
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"inc     dword ptr [eax]" },
          { "str":"pop     ebp" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10001979",
    "label":"sub_10001979",
    "type":"idapro",
    "callees":[
      { "tag":"ds_FreeEnvironmentStringsA" },
      { "tag":"ds_FreeEnvironmentStringsW" },
      { "tag":"ds_GetEnvironmentStrings" },
      { "tag":"ebp" },
      { "tag":"edi" },
      { "tag":"sub_100020F9" },
      { "tag":"sub_100021E2" },
      { "tag":"sub_10002880" }
    ],
    "blocks":[
      {
        "tag":"sub_10001979",
        "label":"sub_10001979",
        "out_true":"loc_100019C7",
        "out_false":"label_104",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ecx" },
          { "str":"push    ecx" },
          { "str":"mov     eax, dword_10008B94" },
          { "str":"push    ebx" },
          { "str":"push    ebp" },
          { "str":"mov     ebp, ds:GetEnvironmentStringsW" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"xor     ebx, ebx" },
          { "str":"xor     esi, esi" },
          { "str":"xor     edi, edi" },
          { "str":"cmp     eax, ebx" },
          { "str":"jnz     short loc_100019C7" }
        ],
        "callees":[]
      },
{
        "tag":"label_104",
        "label":"label_104",
        "out_true":"loc_100019A8",
        "out_false":"label_105",
        "last_inst":"jz",
        "instructions":[
          { "str":"call    ebp" },
          { "str":"mov     esi, eax" },
          { "str":"cmp     esi, ebx" },
          { "str":"jz      short loc_100019A8" }
        ],
        "callees":[
          { "tag":"ebp" }
        ]
      },
{
        "tag":"label_105",
        "label":"label_105",
        "out_true":"loc_100019D0",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     dword_10008B94, 1" },
          { "str":"jmp     short loc_100019D0" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100019A8",
        "label":"loc_100019A8",
        "out_true":"loc_10001AA2",
        "out_false":"label_106",
        "last_inst":"jz",
        "instructions":[
          { "str":"call    ds:GetEnvironmentStrings" },
          { "str":"mov     edi, eax" },
          { "str":"cmp     edi, ebx" },
          { "str":"jz      loc_10001AA2" }
        ],
        "callees":[
          { "tag":"ds_GetEnvironmentStrings" }
        ]
      },
{
        "tag":"label_106",
        "label":"label_106",
        "out_true":"loc_10001A56",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     dword_10008B94, 2" },
          { "str":"jmp     loc_10001A56" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100019C7",
        "label":"loc_100019C7",
        "out_true":"loc_10001A51",
        "out_false":"loc_100019D0",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     eax, 1" },
          { "str":"jnz     loc_10001A51" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100019D0",
        "label":"loc_100019D0",
        "out_true":"loc_100019E0",
        "out_false":"label_107",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     esi, ebx" },
          { "str":"jnz     short loc_100019E0" }
        ],
        "callees":[]
      },
{
        "tag":"label_107",
        "label":"label_107",
        "out_true":"loc_10001AA2",
        "out_false":"loc_100019E0",
        "last_inst":"jz",
        "instructions":[
          { "str":"call    ebp" },
          { "str":"mov     esi, eax" },
          { "str":"cmp     esi, ebx" },
          { "str":"jz      loc_10001AA2" }
        ],
        "callees":[
          { "tag":"ebp" }
        ]
      },
{
        "tag":"loc_100019E0",
        "label":"loc_100019E0",
        "out_true":"loc_100019F5",
        "out_false":"loc_100019E7",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     [esi], bx" },
          { "str":"mov     eax, esi" },
          { "str":"jz      short loc_100019F5" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100019E7",
        "label":"loc_100019E7",
        "out_true":"loc_100019E7",
        "out_false":"label_108",
        "last_inst":"jnz",
        "instructions":[
          { "str":"inc     eax" },
          { "str":"inc     eax" },
          { "str":"cmp     [eax], bx" },
          { "str":"jnz     short loc_100019E7" }
        ],
        "callees":[]
      },
{
        "tag":"label_108",
        "label":"label_108",
        "out_true":"loc_100019E7",
        "out_false":"loc_100019F5",
        "last_inst":"jnz",
        "instructions":[
          { "str":"inc     eax" },
          { "str":"inc     eax" },
          { "str":"cmp     [eax], bx" },
          { "str":"jnz     short loc_100019E7" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100019F5",
        "label":"loc_100019F5",
        "out_true":"loc_10001A46",
        "out_false":"label_109",
        "last_inst":"jz",
        "instructions":[
          { "str":"sub     eax, esi" },
          { "str":"mov     edi, ds:WideCharToMultiByte" },
          { "str":"sar     eax, 1" },
          { "str":"push    ebx" },
          { "str":"push    ebx" },
          { "str":"inc     eax" },
          { "str":"push    ebx" },
          { "str":"push    ebx" },
          { "str":"push    eax" },
          { "str":"push    esi" },
          { "str":"push    ebx" },
          { "str":"push    ebx" },
          { "str":"mov     [esp+38h+cchWideChar], eax" },
          { "str":"call    edi" },
          { "str":"mov     ebp, eax" },
          { "str":"cmp     ebp, ebx" },
          { "str":"jz      short loc_10001A46" }
        ],
        "callees":[
          { "tag":"edi" }
        ]
      },
{
        "tag":"label_109",
        "label":"label_109",
        "out_true":"loc_10001A46",
        "out_false":"label_110",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"call    sub_100021E2" },
          { "str":"cmp     eax, ebx" },
          { "str":"pop     ecx" },
          { "str":"mov     [esp+18h+var_8], eax" },
          { "str":"jz      short loc_10001A46" }
        ],
        "callees":[
          { "tag":"sub_100021E2" }
        ]
      },
{
        "tag":"label_110",
        "label":"label_110",
        "out_true":"loc_10001A42",
        "out_false":"label_111",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"push    ebx" },
          { "str":"push    ebp" },
          { "str":"push    eax" },
          { "str":"push    [esp+28h+cchWideChar]" },
          { "str":"push    esi" },
          { "str":"push    ebx" },
          { "str":"push    ebx" },
          { "str":"call    edi" },
          { "str":"test    eax, eax" },
          { "str":"jnz     short loc_10001A42" }
        ],
        "callees":[
          { "tag":"edi" }
        ]
      },
{
        "tag":"label_111",
        "label":"label_111",
        "out_true":"loc_10001A42",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    [esp+18h+var_8]" },
          { "str":"call    sub_100020F9" },
          { "str":"pop     ecx" },
          { "str":"mov     [esp+18h+var_8], ebx" }
        ],
        "callees":[
          { "tag":"sub_100020F9" }
        ]
      },
{
        "tag":"loc_10001A42",
        "label":"loc_10001A42",
        "out_true":"loc_10001A46",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ebx, [esp+18h+var_8]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001A46",
        "label":"loc_10001A46",
        "out_true":"loc_10001AA4",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    esi" },
          { "str":"call    ds:FreeEnvironmentStringsW" },
          { "str":"mov     eax, ebx" },
          { "str":"jmp     short loc_10001AA4" }
        ],
        "callees":[
          { "tag":"ds_FreeEnvironmentStringsW" }
        ]
      },
{
        "tag":"loc_10001A51",
        "label":"loc_10001A51",
        "out_true":"loc_10001AA2",
        "out_false":"loc_10001A56",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     eax, 2" },
          { "str":"jnz     short loc_10001AA2" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001A56",
        "label":"loc_10001A56",
        "out_true":"loc_10001A66",
        "out_false":"label_112",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     edi, ebx" },
          { "str":"jnz     short loc_10001A66" }
        ],
        "callees":[]
      },
{
        "tag":"label_112",
        "label":"label_112",
        "out_true":"loc_10001AA2",
        "out_false":"loc_10001A66",
        "last_inst":"jz",
        "instructions":[
          { "str":"call    ds:GetEnvironmentStrings" },
          { "str":"mov     edi, eax" },
          { "str":"cmp     edi, ebx" },
          { "str":"jz      short loc_10001AA2" }
        ],
        "callees":[
          { "tag":"ds_GetEnvironmentStrings" }
        ]
      },
{
        "tag":"loc_10001A66",
        "label":"loc_10001A66",
        "out_true":"loc_10001A76",
        "out_false":"loc_10001A6C",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     [edi], bl" },
          { "str":"mov     eax, edi" },
          { "str":"jz      short loc_10001A76" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001A6C",
        "label":"loc_10001A6C",
        "out_true":"loc_10001A6C",
        "out_false":"label_113",
        "last_inst":"jnz",
        "instructions":[
          { "str":"inc     eax" },
          { "str":"cmp     [eax], bl" },
          { "str":"jnz     short loc_10001A6C" }
        ],
        "callees":[]
      },
{
        "tag":"label_113",
        "label":"label_113",
        "out_true":"loc_10001A6C",
        "out_false":"loc_10001A76",
        "last_inst":"jnz",
        "instructions":[
          { "str":"inc     eax" },
          { "str":"cmp     [eax], bl" },
          { "str":"jnz     short loc_10001A6C" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001A76",
        "label":"loc_10001A76",
        "out_true":"loc_10001A8C",
        "out_false":"label_114",
        "last_inst":"jnz",
        "instructions":[
          { "str":"sub     eax, edi" },
          { "str":"inc     eax" },
          { "str":"mov     ebp, eax" },
          { "str":"push    ebp" },
          { "str":"call    sub_100021E2" },
          { "str":"mov     esi, eax" },
          { "str":"pop     ecx" },
          { "str":"cmp     esi, ebx" },
          { "str":"jnz     short loc_10001A8C" }
        ],
        "callees":[
          { "tag":"sub_100021E2" }
        ]
      },
{
        "tag":"label_114",
        "label":"label_114",
        "out_true":"loc_10001A97",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"xor     esi, esi" },
          { "str":"jmp     short loc_10001A97" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001A8C",
        "label":"loc_10001A8C",
        "out_true":"loc_10001A97",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"push    edi" },
          { "str":"push    esi" },
          { "str":"call    sub_10002880" },
          { "str":"add     esp, 0Ch" }
        ],
        "callees":[
          { "tag":"sub_10002880" }
        ]
      },
{
        "tag":"loc_10001A97",
        "label":"loc_10001A97",
        "out_true":"loc_10001AA4",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    edi" },
          { "str":"call    ds:FreeEnvironmentStringsA" },
          { "str":"mov     eax, esi" },
          { "str":"jmp     short loc_10001AA4" }
        ],
        "callees":[
          { "tag":"ds_FreeEnvironmentStringsA" }
        ]
      },
{
        "tag":"loc_10001AA2",
        "label":"loc_10001AA2",
        "out_true":"loc_10001AA4",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     eax, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001AA4",
        "label":"loc_10001AA4",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebp" },
          { "str":"pop     ebx" },
          { "str":"pop     ecx" },
          { "str":"pop     ecx" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10001AAB",
    "label":"sub_10001AAB",
    "type":"idapro",
    "callees":[
      { "tag":"ds_GetModuleHandleA" }
    ],
    "blocks":[
      {
        "tag":"sub_10001AAB",
        "label":"sub_10001AAB",
        "out_true":"loc_10001AD6",
        "out_false":"label_115",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    esi" },
          { "str":"mov     esi, [esp+4+arg_0]" },
          { "str":"push    0" },
          { "str":"and     dword ptr [esi], 0" },
          { "str":"call    ds:GetModuleHandleA" },
          { "str":"cmp     word ptr [eax], 5A4Dh" },
          { "str":"jnz     short loc_10001AD6" }
        ],
        "callees":[
          { "tag":"ds_GetModuleHandleA" }
        ]
      },
{
        "tag":"label_115",
        "label":"label_115",
        "out_true":"loc_10001AD6",
        "out_false":"label_116",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     ecx, [eax+3Ch]" },
          { "str":"test    ecx, ecx" },
          { "str":"jz      short loc_10001AD6" }
        ],
        "callees":[]
      },
{
        "tag":"label_116",
        "label":"label_116",
        "out_true":"loc_10001AD6",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"add     eax, ecx" },
          { "str":"mov     cl, [eax+1Ah]" },
          { "str":"mov     [esi], cl" },
          { "str":"mov     al, [eax+1Bh]" },
          { "str":"mov     [esi+1], al" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001AD6",
        "label":"loc_10001AD6",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     esi" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10001AD8",
    "label":"sub_10001AD8",
    "type":"idapro",
    "callees":[
      { "tag":"__alloca_probe" },
      { "tag":"ds_GetEnvironmentVariableA" },
      { "tag":"ds_GetModuleFileNameA" },
      { "tag":"ds_GetVersionExA" },
      { "tag":"sub_10001AAB" },
      { "tag":"sub_10002BB5" },
      { "tag":"sub_10002DF0" },
      { "tag":"sub_10002EB0" },
      { "tag":"sub_10002F30" }
    ],
    "blocks":[
      {
        "tag":"sub_10001AD8",
        "label":"sub_10001AD8",
        "out_true":"loc_10001B1B",
        "out_false":"label_117",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"mov     eax, 122Ch" },
          { "str":"call    __alloca_probe" },
          { "str":"lea     eax, [ebp+VersionInformation]" },
          { "str":"push    ebx" },
          { "str":"push    eax" },
          { "str":"mov     [ebp+VersionInformation.dwOSVersionInfoSize], 94h" },
          { "str":"call    ds:GetVersionExA" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10001B1B" }
        ],
        "callees":[
          { "tag":"__alloca_probe" },
          { "tag":"ds_GetVersionExA" }
        ]
      },
{
        "tag":"label_117",
        "label":"label_117",
        "out_true":"loc_10001B1B",
        "out_false":"label_118",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     [ebp+VersionInformation.dwPlatformId], 2" },
          { "str":"jnz     short loc_10001B1B" }
        ],
        "callees":[]
      },
{
        "tag":"label_118",
        "label":"label_118",
        "out_true":"loc_10001B1B",
        "out_false":"label_119",
        "last_inst":"jb",
        "instructions":[
          { "str":"cmp     [ebp+VersionInformation.dwMajorVersion], 5" },
          { "str":"jb      short loc_10001B1B" }
        ],
        "callees":[]
      },
{
        "tag":"label_119",
        "label":"label_119",
        "out_true":"loc_10001C1D",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    1" },
          { "str":"pop     eax" },
          { "str":"jmp     loc_10001C1D" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001B1B",
        "label":"loc_10001B1B",
        "out_true":"loc_10001C0A",
        "out_false":"label_120",
        "last_inst":"jz",
        "instructions":[
          { "str":"lea     eax, [ebp+Buffer]" },
          { "str":"push    1090h" },
          { "str":"push    eax" },
          { "str":"push    offset Name" },
          { "str":"call    ds:GetEnvironmentVariableA" },
          { "str":"test    eax, eax" },
          { "str":"jz      loc_10001C0A" }
        ],
        "callees":[
          { "tag":"ds_GetEnvironmentVariableA" }
        ]
      },
{
        "tag":"label_120",
        "label":"label_120",
        "out_true":"loc_10001B5D",
        "out_false":"loc_10001B4A",
        "last_inst":"jz",
        "instructions":[
          { "str":"xor     ebx, ebx" },
          { "str":"lea     ecx, [ebp+Buffer]" },
          { "str":"cmp     [ebp+Buffer], bl" },
          { "str":"jz      short loc_10001B5D" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001B4A",
        "label":"loc_10001B4A",
        "out_true":"loc_10001B58",
        "out_false":"label_121",
        "last_inst":"jl",
        "instructions":[
          { "str":"mov     al, [ecx]" },
          { "str":"cmp     al, 61h" },
          { "str":"jl      short loc_10001B58" }
        ],
        "callees":[]
      },
{
        "tag":"label_121",
        "label":"label_121",
        "out_true":"loc_10001B58",
        "out_false":"label_122",
        "last_inst":"jg",
        "instructions":[
          { "str":"cmp     al, 7Ah" },
          { "str":"jg      short loc_10001B58" }
        ],
        "callees":[]
      },
{
        "tag":"label_122",
        "label":"label_122",
        "out_true":"loc_10001B58",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"sub     al, 20h" },
          { "str":"mov     [ecx], al" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001B58",
        "label":"loc_10001B58",
        "out_true":"loc_10001B4A",
        "out_false":"loc_10001B5D",
        "last_inst":"jnz",
        "instructions":[
          { "str":"inc     ecx" },
          { "str":"cmp     [ecx], bl" },
          { "str":"jnz     short loc_10001B4A" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001B5D",
        "label":"loc_10001B5D",
        "out_true":"loc_10001B7F",
        "out_false":"label_123",
        "last_inst":"jnz",
        "instructions":[
          { "str":"lea     eax, [ebp+Buffer]" },
          { "str":"push    16h" },
          { "str":"push    eax" },
          { "str":"push    offset a__global_heap_" },
          { "str":"call    sub_10002F30" },
          { "str":"add     esp, 0Ch" },
          { "str":"test    eax, eax" },
          { "str":"jnz     short loc_10001B7F" }
        ],
        "callees":[
          { "tag":"sub_10002F30" }
        ]
      },
{
        "tag":"label_123",
        "label":"label_123",
        "out_true":"loc_10001BC8",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"lea     eax, [ebp+Buffer]" },
          { "str":"jmp     short loc_10001BC8" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001B7F",
        "label":"loc_10001B7F",
        "out_true":"loc_10001BB3",
        "out_false":"loc_10001BA0",
        "last_inst":"jz",
        "instructions":[
          { "str":"lea     eax, [ebp+Filename]" },
          { "str":"push    104h" },
          { "str":"push    eax" },
          { "str":"push    ebx" },
          { "str":"call    ds:GetModuleFileNameA" },
          { "str":"cmp     [ebp+Filename], bl" },
          { "str":"lea     ecx, [ebp+Filename]" },
          { "str":"jz      short loc_10001BB3" }
        ],
        "callees":[
          { "tag":"ds_GetModuleFileNameA" }
        ]
      },
{
        "tag":"loc_10001BA0",
        "label":"loc_10001BA0",
        "out_true":"loc_10001BAE",
        "out_false":"label_124",
        "last_inst":"jl",
        "instructions":[
          { "str":"mov     al, [ecx]" },
          { "str":"cmp     al, 61h" },
          { "str":"jl      short loc_10001BAE" }
        ],
        "callees":[]
      },
{
        "tag":"label_124",
        "label":"label_124",
        "out_true":"loc_10001BAE",
        "out_false":"label_125",
        "last_inst":"jg",
        "instructions":[
          { "str":"cmp     al, 7Ah" },
          { "str":"jg      short loc_10001BAE" }
        ],
        "callees":[]
      },
{
        "tag":"label_125",
        "label":"label_125",
        "out_true":"loc_10001BAE",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"sub     al, 20h" },
          { "str":"mov     [ecx], al" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001BAE",
        "label":"loc_10001BAE",
        "out_true":"loc_10001BA0",
        "out_false":"loc_10001BB3",
        "last_inst":"jnz",
        "instructions":[
          { "str":"inc     ecx" },
          { "str":"cmp     [ecx], bl" },
          { "str":"jnz     short loc_10001BA0" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001BB3",
        "label":"loc_10001BB3",
        "out_true":"loc_10001BC8",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"lea     eax, [ebp+Filename]" },
          { "str":"push    eax" },
          { "str":"lea     eax, [ebp+Buffer]" },
          { "str":"push    eax" },
          { "str":"call    sub_10002EB0" },
          { "str":"pop     ecx" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_10002EB0" }
        ]
      },
{
        "tag":"loc_10001BC8",
        "label":"loc_10001BC8",
        "out_true":"loc_10001C0A",
        "out_false":"label_126",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     eax, ebx" },
          { "str":"jz      short loc_10001C0A" }
        ],
        "callees":[]
      },
{
        "tag":"label_126",
        "label":"label_126",
        "out_true":"loc_10001C0A",
        "out_false":"label_127",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    2Ch" },
          { "str":"push    eax" },
          { "str":"call    sub_10002DF0" },
          { "str":"pop     ecx" },
          { "str":"cmp     eax, ebx" },
          { "str":"pop     ecx" },
          { "str":"jz      short loc_10001C0A" }
        ],
        "callees":[
          { "tag":"sub_10002DF0" }
        ]
      },
{
        "tag":"label_127",
        "label":"label_127",
        "out_true":"loc_10001BEF",
        "out_false":"loc_10001BE1",
        "last_inst":"jz",
        "instructions":[
          { "str":"inc     eax" },
          { "str":"mov     ecx, eax" },
          { "str":"cmp     [eax], bl" },
          { "str":"jz      short loc_10001BEF" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001BE1",
        "label":"loc_10001BE1",
        "out_true":"loc_10001BEA",
        "out_false":"label_128",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     byte ptr [ecx], 3Bh" },
          { "str":"jnz     short loc_10001BEA" }
        ],
        "callees":[]
      },
{
        "tag":"label_128",
        "label":"label_128",
        "out_true":"loc_10001BEB",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     [ecx], bl" },
          { "str":"jmp     short loc_10001BEB" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001BEA",
        "label":"loc_10001BEA",
        "out_true":"loc_10001BEB",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"inc     ecx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001BEB",
        "label":"loc_10001BEB",
        "out_true":"loc_10001BE1",
        "out_false":"loc_10001BEF",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     [ecx], bl" },
          { "str":"jnz     short loc_10001BE1" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001BEF",
        "label":"loc_10001BEF",
        "out_true":"loc_10001C1D",
        "out_false":"label_129",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    0Ah" },
          { "str":"push    ebx" },
          { "str":"push    eax" },
          { "str":"call    sub_10002BB5" },
          { "str":"add     esp, 0Ch" },
          { "str":"cmp     eax, 2" },
          { "str":"jz      short loc_10001C1D" }
        ],
        "callees":[
          { "tag":"sub_10002BB5" }
        ]
      },
{
        "tag":"label_129",
        "label":"label_129",
        "out_true":"loc_10001C1D",
        "out_false":"label_130",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     eax, 3" },
          { "str":"jz      short loc_10001C1D" }
        ],
        "callees":[]
      },
{
        "tag":"label_130",
        "label":"label_130",
        "out_true":"loc_10001C1D",
        "out_false":"loc_10001C0A",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     eax, 1" },
          { "str":"jz      short loc_10001C1D" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001C0A",
        "label":"loc_10001C0A",
        "out_true":"loc_10001C1D",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"lea     eax, [ebp+var_4]" },
          { "str":"push    eax" },
          { "str":"call    sub_10001AAB" },
          { "str":"cmp     [ebp+var_4], 6" },
          { "str":"pop     ecx" },
          { "str":"sbb     eax, eax" },
          { "str":"add     eax, 3" }
        ],
        "callees":[
          { "tag":"sub_10001AAB" }
        ]
      },
{
        "tag":"loc_10001C1D",
        "label":"loc_10001C1D",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     ebx" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10001C20",
    "label":"sub_10001C20",
    "type":"idapro",
    "callees":[
      { "tag":"ds_HeapCreate" },
      { "tag":"ds_HeapDestroy" },
      { "tag":"sub_10001AD8" },
      { "tag":"sub_10002F9F" },
      { "tag":"sub_100037F0" }
    ],
    "blocks":[
      {
        "tag":"sub_10001C20",
        "label":"sub_10001C20",
        "out_true":"loc_10001C76",
        "out_false":"label_131",
        "last_inst":"jz",
        "instructions":[
          { "str":"xor     eax, eax" },
          { "str":"push    0" },
          { "str":"cmp     [esp+4+arg_0], eax" },
          { "str":"push    1000h" },
          { "str":"setz    al" },
          { "str":"push    eax" },
          { "str":"call    ds:HeapCreate" },
          { "str":"test    eax, eax" },
          { "str":"mov     hHeap, eax" },
          { "str":"jz      short loc_10001C76" }
        ],
        "callees":[
          { "tag":"ds_HeapCreate" }
        ]
      },
{
        "tag":"label_131",
        "label":"label_131",
        "out_true":"loc_10001C5C",
        "out_false":"label_132",
        "last_inst":"jnz",
        "instructions":[
          { "str":"call    sub_10001AD8" },
          { "str":"cmp     eax, 3" },
          { "str":"mov     dword_10008FEC, eax" },
          { "str":"jnz     short loc_10001C5C" }
        ],
        "callees":[
          { "tag":"sub_10001AD8" }
        ]
      },
{
        "tag":"label_132",
        "label":"label_132",
        "out_true":"loc_10001C66",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    3F8h" },
          { "str":"call    sub_10002F9F" },
          { "str":"pop     ecx" },
          { "str":"jmp     short loc_10001C66" }
        ],
        "callees":[
          { "tag":"sub_10002F9F" }
        ]
      },
{
        "tag":"loc_10001C5C",
        "label":"loc_10001C5C",
        "out_true":"loc_10001C79",
        "out_false":"label_133",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     eax, 2" },
          { "str":"jnz     short loc_10001C79" }
        ],
        "callees":[]
      },
{
        "tag":"label_133",
        "label":"label_133",
        "out_true":"loc_10001C66",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"call    sub_100037F0" }
        ],
        "callees":[
          { "tag":"sub_100037F0" }
        ]
      },
{
        "tag":"loc_10001C66",
        "label":"loc_10001C66",
        "out_true":"loc_10001C79",
        "out_false":"label_134",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    eax, eax" },
          { "str":"jnz     short loc_10001C79" }
        ],
        "callees":[]
      },
{
        "tag":"label_134",
        "label":"label_134",
        "out_true":"loc_10001C76",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    hHeap" },
          { "str":"call    ds:HeapDestroy" }
        ],
        "callees":[
          { "tag":"ds_HeapDestroy" }
        ]
      },
{
        "tag":"loc_10001C76",
        "label":"loc_10001C76",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"xor     eax, eax" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001C79",
        "label":"loc_10001C79",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    1" },
          { "str":"pop     eax" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10001C7D",
    "label":"sub_10001C7D",
    "type":"idapro",
    "callees":[
      { "tag":"ds_HeapDestroy" },
      { "tag":"ds_VirtualFree" },
      { "tag":"ebp" },
      { "tag":"edi" }
    ],
    "blocks":[
      {
        "tag":"sub_10001C7D",
        "label":"sub_10001C7D",
        "out_true":"loc_10001CEF",
        "out_false":"label_135",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     eax, dword_10008FEC" },
          { "str":"push    esi" },
          { "str":"cmp     eax, 3" },
          { "str":"push    edi" },
          { "str":"jnz     short loc_10001CEF" }
        ],
        "callees":[]
      },
{
        "tag":"label_135",
        "label":"label_135",
        "out_true":"loc_10001CDB",
        "out_false":"label_136",
        "last_inst":"jl",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"xor     ebx, ebx" },
          { "str":"cmp     dword_10008DA8, ebx" },
          { "str":"push    ebp" },
          { "str":"mov     ebp, ds:HeapFree" },
          { "str":"jle     short loc_10001CDB" }
        ],
        "callees":[]
      },
{
        "tag":"label_136",
        "label":"label_136",
        "out_true":"loc_10001CA9",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, lpMem" },
          { "str":"mov     edi, ds:VirtualFree" },
          { "str":"lea     esi, [eax+0Ch]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001CA9",
        "label":"loc_10001CA9",
        "out_true":"loc_10001CA9",
        "out_false":"loc_10001CDB",
        "last_inst":"jl",
        "instructions":[
          { "str":"push    4000h" },
          { "str":"push    100000h" },
          { "str":"push    dword ptr [esi]" },
          { "str":"call    edi" },
          { "str":"push    8000h" },
          { "str":"push    0" },
          { "str":"push    dword ptr [esi]" },
          { "str":"call    edi" },
          { "str":"push    dword ptr [esi+4]" },
          { "str":"push    0" },
          { "str":"push    hHeap" },
          { "str":"call    ebp" },
          { "str":"add     esi, 14h" },
          { "str":"inc     ebx" },
          { "str":"cmp     ebx, dword_10008DA8" },
          { "str":"jl      short loc_10001CA9" }
        ],
        "callees":[
          { "tag":"ebp" },
          { "tag":"edi" }
        ]
      },
{
        "tag":"loc_10001CDB",
        "label":"loc_10001CDB",
        "out_true":"loc_10001D16",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    lpMem" },
          { "str":"push    0" },
          { "str":"push    hHeap" },
          { "str":"call    ebp" },
          { "str":"pop     ebp" },
          { "str":"pop     ebx" },
          { "str":"jmp     short loc_10001D16" }
        ],
        "callees":[
          { "tag":"ebp" }
        ]
      },
{
        "tag":"loc_10001CEF",
        "label":"loc_10001CEF",
        "out_true":"loc_10001D16",
        "out_false":"label_137",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     eax, 2" },
          { "str":"jnz     short loc_10001D16" }
        ],
        "callees":[]
      },
{
        "tag":"label_137",
        "label":"label_137",
        "out_true":"loc_10001CFB",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     edi, offset off_10006340" },
          { "str":"mov     esi, edi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001CFB",
        "label":"loc_10001CFB",
        "out_true":"loc_10001D10",
        "out_false":"label_138",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [esi+10h]" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10001D10" }
        ],
        "callees":[]
      },
{
        "tag":"label_138",
        "label":"label_138",
        "out_true":"loc_10001D10",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    8000h" },
          { "str":"push    0" },
          { "str":"push    eax" },
          { "str":"call    ds:VirtualFree" }
        ],
        "callees":[
          { "tag":"ds_VirtualFree" }
        ]
      },
{
        "tag":"loc_10001D10",
        "label":"loc_10001D10",
        "out_true":"loc_10001CFB",
        "out_false":"loc_10001D16",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     esi, [esi]" },
          { "str":"cmp     esi, edi" },
          { "str":"jnz     short loc_10001CFB" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001D16",
        "label":"loc_10001D16",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    hHeap" },
          { "str":"call    ds:HeapDestroy" },
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"ds_HeapDestroy" }
        ]
      }
    ]
  },{
    "tag":"sub_10001D25",
    "label":"sub_10001D25",
    "type":"idapro",
    "callees":[
      { "tag":"eax" },
      { "tag":"sub_10001D5E" }
    ],
    "blocks":[
      {
        "tag":"sub_10001D25",
        "label":"sub_10001D25",
        "out_true":"loc_10001D3C",
        "out_false":"label_139",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, dword_10008A44" },
          { "str":"cmp     eax, 1" },
          { "str":"jz      short loc_10001D3C" }
        ],
        "callees":[]
      },
{
        "tag":"label_139",
        "label":"label_139",
        "out_true":"locret_10001D5D",
        "out_false":"label_140",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    eax, eax" },
          { "str":"jnz     short locret_10001D5D" }
        ],
        "callees":[]
      },
{
        "tag":"label_140",
        "label":"label_140",
        "out_true":"locret_10001D5D",
        "out_false":"loc_10001D3C",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     dword_10008A48, 1" },
          { "str":"jnz     short locret_10001D5D" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001D3C",
        "label":"loc_10001D3C",
        "out_true":"loc_10001D52",
        "out_false":"label_141",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    0FCh" },
          { "str":"call    sub_10001D5E" },
          { "str":"mov     eax, dword_10008B98" },
          { "str":"pop     ecx" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10001D52" }
        ],
        "callees":[
          { "tag":"sub_10001D5E" }
        ]
      },
{
        "tag":"label_141",
        "label":"label_141",
        "out_true":"loc_10001D52",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"call    eax" }
        ],
        "callees":[
          { "tag":"eax" }
        ]
      },
{
        "tag":"loc_10001D52",
        "label":"loc_10001D52",
        "out_true":"locret_10001D5D",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    0FFh" },
          { "str":"call    sub_10001D5E" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_10001D5E" }
        ]
      },
{
        "tag":"locret_10001D5D",
        "label":"locret_10001D5D",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10001D5E",
    "label":"sub_10001D5E",
    "type":"idapro",
    "callees":[
      { "tag":"ds_GetModuleFileNameA" },
      { "tag":"ds_GetStdHandle" },
      { "tag":"ds_WriteFile" },
      { "tag":"sub_10002320" },
      { "tag":"sub_10002330" },
      { "tag":"sub_10002410" },
      { "tag":"sub_10003E14" },
      { "tag":"sub_10003EA0" }
    ],
    "blocks":[
      {
        "tag":"sub_10001D5E",
        "label":"sub_10001D5E",
        "out_true":"loc_10001D71",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"sub     esp, 1A4h" },
          { "str":"mov     edx, [ebp+NumberOfBytesWritten]" },
          { "str":"xor     ecx, ecx" },
          { "str":"mov     eax, offset dword_10006060" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001D71",
        "label":"loc_10001D71",
        "out_true":"loc_10001D80",
        "out_false":"label_142",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     edx, [eax]" },
          { "str":"jz      short loc_10001D80" }
        ],
        "callees":[]
      },
{
        "tag":"label_142",
        "label":"label_142",
        "out_true":"loc_10001D71",
        "out_false":"loc_10001D80",
        "last_inst":"jb",
        "instructions":[
          { "str":"add     eax, 8" },
          { "str":"inc     ecx" },
          { "str":"cmp     eax, offset dword_100060F0" },
          { "str":"jb      short loc_10001D71" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001D80",
        "label":"loc_10001D80",
        "out_true":"loc_10001EAE",
        "out_false":"label_143",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    esi" },
          { "str":"mov     esi, ecx" },
          { "str":"shl     esi, 3" },
          { "str":"cmp     edx, dword_10006060[esi]" },
          { "str":"jnz     loc_10001EAE" }
        ],
        "callees":[]
      },
{
        "tag":"label_143",
        "label":"label_143",
        "out_true":"loc_10001E88",
        "out_false":"label_144",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, dword_10008A44" },
          { "str":"cmp     eax, 1" },
          { "str":"jz      loc_10001E88" }
        ],
        "callees":[]
      },
{
        "tag":"label_144",
        "label":"label_144",
        "out_true":"loc_10001DB1",
        "out_false":"label_145",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    eax, eax" },
          { "str":"jnz     short loc_10001DB1" }
        ],
        "callees":[]
      },
{
        "tag":"label_145",
        "label":"label_145",
        "out_true":"loc_10001E88",
        "out_false":"loc_10001DB1",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     dword_10008A48, 1" },
          { "str":"jz      loc_10001E88" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001DB1",
        "label":"loc_10001DB1",
        "out_true":"loc_10001EAE",
        "out_false":"label_146",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     edx, 0FCh" },
          { "str":"jz      loc_10001EAE" }
        ],
        "callees":[]
      },
{
        "tag":"label_146",
        "label":"label_146",
        "out_true":"loc_10001DE8",
        "out_false":"label_147",
        "last_inst":"jnz",
        "instructions":[
          { "str":"lea     eax, [ebp+Filename]" },
          { "str":"push    104h" },
          { "str":"push    eax" },
          { "str":"push    0" },
          { "str":"call    ds:GetModuleFileNameA" },
          { "str":"test    eax, eax" },
          { "str":"jnz     short loc_10001DE8" }
        ],
        "callees":[
          { "tag":"ds_GetModuleFileNameA" }
        ]
      },
{
        "tag":"label_147",
        "label":"label_147",
        "out_true":"loc_10001DE8",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"lea     eax, [ebp+Filename]" },
          { "str":"push    offset aProgramNameUnk" },
          { "str":"push    eax" },
          { "str":"call    sub_10002320" },
          { "str":"pop     ecx" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_10002320" }
        ]
      },
{
        "tag":"loc_10001DE8",
        "label":"loc_10001DE8",
        "out_true":"loc_10001E2B",
        "out_false":"label_148",
        "last_inst":"jb",
        "instructions":[
          { "str":"lea     eax, [ebp+Filename]" },
          { "str":"push    edi" },
          { "str":"push    eax" },
          { "str":"lea     edi, [ebp+Filename]" },
          { "str":"call    sub_10002410" },
          { "str":"inc     eax" },
          { "str":"pop     ecx" },
          { "str":"cmp     eax, 3Ch" },
          { "str":"jbe     short loc_10001E2B" }
        ],
        "callees":[
          { "tag":"sub_10002410" }
        ]
      },
{
        "tag":"label_148",
        "label":"label_148",
        "out_true":"loc_10001E2B",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"lea     eax, [ebp+Filename]" },
          { "str":"push    eax" },
          { "str":"call    sub_10002410" },
          { "str":"mov     edi, eax" },
          { "str":"lea     eax, [ebp+Filename]" },
          { "str":"sub     eax, 3Bh" },
          { "str":"push    3" },
          { "str":"add     edi, eax" },
          { "str":"push    offset a___" },
          { "str":"push    edi" },
          { "str":"call    sub_10003EA0" },
          { "str":"add     esp, 10h" }
        ],
        "callees":[
          { "tag":"sub_10002410" },
          { "tag":"sub_10003EA0" }
        ]
      },
{
        "tag":"loc_10001E2B",
        "label":"loc_10001E2B",
        "out_true":"loc_10001EAE",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"lea     eax, [ebp+var_A0]" },
          { "str":"push    offset aRuntimeErrorPr" },
          { "str":"push    eax" },
          { "str":"call    sub_10002320" },
          { "str":"lea     eax, [ebp+var_A0]" },
          { "str":"push    edi" },
          { "str":"push    eax" },
          { "str":"call    sub_10002330" },
          { "str":"lea     eax, [ebp+var_A0]" },
          { "str":"push    offset asc_100053B4" },
          { "str":"push    eax" },
          { "str":"call    sub_10002330" },
          { "str":"push    off_10006064[esi]" },
          { "str":"lea     eax, [ebp+var_A0]" },
          { "str":"push    eax" },
          { "str":"call    sub_10002330" },
          { "str":"push    12010h" },
          { "str":"lea     eax, [ebp+var_A0]" },
          { "str":"push    offset aMicrosoftVisua" },
          { "str":"push    eax" },
          { "str":"call    sub_10003E14" },
          { "str":"add     esp, 2Ch" },
          { "str":"pop     edi" },
          { "str":"jmp     short loc_10001EAE" }
        ],
        "callees":[
          { "tag":"sub_10002320" },
          { "tag":"sub_10002330" },
          { "tag":"sub_10003E14" }
        ]
      },
{
        "tag":"loc_10001E88",
        "label":"loc_10001E88",
        "out_true":"loc_10001EAE",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"lea     eax, [ebp+NumberOfBytesWritten]" },
          { "str":"lea     esi, off_10006064[esi]" },
          { "str":"push    0" },
          { "str":"push    eax" },
          { "str":"push    dword ptr [esi]" },
          { "str":"call    sub_10002410" },
          { "str":"pop     ecx" },
          { "str":"push    eax" },
          { "str":"push    dword ptr [esi]" },
          { "str":"push    0FFFFFFF4h" },
          { "str":"call    ds:GetStdHandle" },
          { "str":"push    eax" },
          { "str":"call    ds:WriteFile" }
        ],
        "callees":[
          { "tag":"ds_GetStdHandle" },
          { "tag":"ds_WriteFile" },
          { "tag":"sub_10002410" }
        ]
      },
{
        "tag":"loc_10001EAE",
        "label":"loc_10001EAE",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     esi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10001EB1",
    "label":"sub_10001EB1",
    "type":"idapro",
    "callees":[
      { "tag":"esi" }
    ],
    "blocks":[
      {
        "tag":"sub_10001EB1",
        "label":"sub_10001EB1",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    esi" },
          { "str":"mov     esi, ds:InitializeCriticalSection" },
          { "str":"push    lpCriticalSection" },
          { "str":"call    esi" },
          { "str":"push    off_10006124" },
          { "str":"call    esi" },
          { "str":"push    off_10006114" },
          { "str":"call    esi" },
          { "str":"push    off_100060F4" },
          { "str":"call    esi" },
          { "str":"pop     esi" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"esi" }
        ]
      }
    ]
  },{
    "tag":"sub_10001EDA",
    "label":"sub_10001EDA",
    "type":"idapro",
    "callees":[
      { "tag":"edi" },
      { "tag":"sub_100020F9" }
    ],
    "blocks":[
      {
        "tag":"sub_10001EDA",
        "label":"sub_10001EDA",
        "out_true":"loc_10001EE7",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"mov     edi, ds:DeleteCriticalSection" },
          { "str":"mov     esi, offset dword_100060F0" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001EE7",
        "label":"loc_10001EE7",
        "out_true":"loc_10001F18",
        "out_false":"label_149",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [esi]" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10001F18" }
        ],
        "callees":[]
      },
{
        "tag":"label_149",
        "label":"label_149",
        "out_true":"loc_10001F18",
        "out_false":"label_150",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     esi, offset lpCriticalSection" },
          { "str":"jz      short loc_10001F18" }
        ],
        "callees":[]
      },
{
        "tag":"label_150",
        "label":"label_150",
        "out_true":"loc_10001F18",
        "out_false":"label_151",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     esi, offset off_10006124" },
          { "str":"jz      short loc_10001F18" }
        ],
        "callees":[]
      },
{
        "tag":"label_151",
        "label":"label_151",
        "out_true":"loc_10001F18",
        "out_false":"label_152",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     esi, offset off_10006114" },
          { "str":"jz      short loc_10001F18" }
        ],
        "callees":[]
      },
{
        "tag":"label_152",
        "label":"label_152",
        "out_true":"loc_10001F18",
        "out_false":"label_153",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     esi, offset off_100060F4" },
          { "str":"jz      short loc_10001F18" }
        ],
        "callees":[]
      },
{
        "tag":"label_153",
        "label":"label_153",
        "out_true":"loc_10001F18",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    eax" },
          { "str":"call    edi" },
          { "str":"push    dword ptr [esi]" },
          { "str":"call    sub_100020F9" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"edi" },
          { "tag":"sub_100020F9" }
        ]
      },
{
        "tag":"loc_10001F18",
        "label":"loc_10001F18",
        "out_true":"loc_10001EE7",
        "out_false":"label_154",
        "last_inst":"jl",
        "instructions":[
          { "str":"add     esi, 4" },
          { "str":"cmp     esi, offset unk_100061B0" },
          { "str":"jl      short loc_10001EE7" }
        ],
        "callees":[]
      },
{
        "tag":"label_154",
        "label":"label_154",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    off_10006114" },
          { "str":"call    edi" },
          { "str":"push    off_10006124" },
          { "str":"call    edi" },
          { "str":"push    lpCriticalSection" },
          { "str":"call    edi" },
          { "str":"push    off_100060F4" },
          { "str":"call    edi" },
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"edi" }
        ]
      }
    ]
  },{
    "tag":"sub_10001F46",
    "label":"sub_10001F46",
    "type":"idapro",
    "callees":[
      { "tag":"ds_EnterCriticalSection" },
      { "tag":"ds_InitializeCriticalSection" },
      { "tag":"sub_10001186" },
      { "tag":"sub_10001F46" },
      { "tag":"sub_10001FA7" },
      { "tag":"sub_100020F9" },
      { "tag":"sub_100021E2" }
    ],
    "blocks":[
      {
        "tag":"sub_10001F46",
        "label":"sub_10001F46",
        "out_true":"loc_10001F9C",
        "out_false":"label_155",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"push    esi" },
          { "str":"cmp     dword_100060F0[eax*4], 0" },
          { "str":"lea     esi, dword_100060F0[eax*4]" },
          { "str":"jnz     short loc_10001F9C" }
        ],
        "callees":[]
      },
{
        "tag":"label_155",
        "label":"label_155",
        "out_true":"loc_10001F75",
        "out_false":"label_156",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    edi" },
          { "str":"push    18h" },
          { "str":"call    sub_100021E2" },
          { "str":"mov     edi, eax" },
          { "str":"pop     ecx" },
          { "str":"test    edi, edi" },
          { "str":"jnz     short loc_10001F75" }
        ],
        "callees":[
          { "tag":"sub_100021E2" }
        ]
      },
{
        "tag":"label_156",
        "label":"label_156",
        "out_true":"loc_10001F75",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    11h" },
          { "str":"call    sub_10001186" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_10001186" }
        ]
      },
{
        "tag":"loc_10001F75",
        "label":"loc_10001F75",
        "out_true":"loc_10001F8D",
        "out_false":"label_157",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    11h" },
          { "str":"call    sub_10001F46" },
          { "str":"cmp     dword ptr [esi], 0" },
          { "str":"pop     ecx" },
          { "str":"push    edi" },
          { "str":"jnz     short loc_10001F8D" }
        ],
        "callees":[
          { "tag":"sub_10001F46" }
        ]
      },
{
        "tag":"label_157",
        "label":"label_157",
        "out_true":"loc_10001F93",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"call    ds:InitializeCriticalSection" },
          { "str":"mov     [esi], edi" },
          { "str":"jmp     short loc_10001F93" }
        ],
        "callees":[
          { "tag":"ds_InitializeCriticalSection" }
        ]
      },
{
        "tag":"loc_10001F8D",
        "label":"loc_10001F8D",
        "out_true":"loc_10001F93",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"call    sub_100020F9" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_100020F9" }
        ]
      },
{
        "tag":"loc_10001F93",
        "label":"loc_10001F93",
        "out_true":"loc_10001F9C",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    11h" },
          { "str":"call    sub_10001FA7" },
          { "str":"pop     ecx" },
          { "str":"pop     edi" }
        ],
        "callees":[
          { "tag":"sub_10001FA7" }
        ]
      },
{
        "tag":"loc_10001F9C",
        "label":"loc_10001F9C",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    dword ptr [esi]" },
          { "str":"call    ds:EnterCriticalSection" },
          { "str":"pop     esi" },
          { "str":"pop     ebp" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"ds_EnterCriticalSection" }
        ]
      }
    ]
  },{
    "tag":"sub_10001FA7",
    "label":"sub_10001FA7",
    "type":"idapro",
    "callees":[
      { "tag":"ds_LeaveCriticalSection" }
    ],
    "blocks":[
      {
        "tag":"sub_10001FA7",
        "label":"sub_10001FA7",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"push    dword_100060F0[eax*4]" },
          { "str":"call    ds:LeaveCriticalSection" },
          { "str":"pop     ebp" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"ds_LeaveCriticalSection" }
        ]
      }
    ]
  },{
    "tag":"sub_10001FBC",
    "label":"sub_10001FBC",
    "type":"idapro",
    "callees":[
      { "tag":"loc_10002055" },
      { "tag":"sub_10001F46" },
      { "tag":"sub_10001FA7" },
      { "tag":"sub_1000333B" }
    ],
    "blocks":[
      {
        "tag":"sub_10001FBC",
        "label":"sub_10001FBC",
        "out_true":"loc_10002005",
        "out_false":"label_158",
        "last_inst":"ja",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    0FFFFFFFFh" },
          { "str":"push    offset stru_100053F0" },
          { "str":"push    offset sub_10004110" },
          { "str":"mov     eax, large fs:0" },
          { "str":"push    eax" },
          { "str":"mov     large fs:0, esp" },
          { "str":"sub     esp, 18h" },
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"mov     esi, [ebp+arg_0]" },
          { "str":"imul    esi, [ebp+arg_4]" },
          { "str":"mov     [ebp+arg_4], esi" },
          { "str":"mov     [ebp+var_1C], esi" },
          { "str":"cmp     esi, 0FFFFFFE0h" },
          { "str":"ja      short loc_10002005" }
        ],
        "callees":[]
      },
{
        "tag":"label_158",
        "label":"label_158",
        "out_true":"loc_10001FFA",
        "out_false":"label_159",
        "last_inst":"jnz",
        "instructions":[
          { "str":"xor     ebx, ebx" },
          { "str":"cmp     esi, ebx" },
          { "str":"jnz     short loc_10001FFA" }
        ],
        "callees":[]
      },
{
        "tag":"label_159",
        "label":"label_159",
        "out_true":"loc_10001FFA",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    1" },
          { "str":"pop     esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10001FFA",
        "label":"loc_10001FFA",
        "out_true":"loc_10002007",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"add     esi, 0Fh" },
          { "str":"and     esi, 0FFFFFFF0h" },
          { "str":"mov     [ebp+arg_4], esi" },
          { "str":"jmp     short loc_10002007" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002005",
        "label":"loc_10002005",
        "out_true":"loc_10002007",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     ebx, ebx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002007",
        "label":"loc_10002007",
        "out_true":"loc_100020BB",
        "out_false":"label_160",
        "last_inst":"ja",
        "instructions":[
          { "str":"mov     [ebp+var_20], ebx" },
          { "str":"cmp     esi, 0FFFFFFE0h" },
          { "str":"ja      loc_100020BB" }
        ],
        "callees":[]
      },
{
        "tag":"label_160",
        "label":"label_160",
        "out_true":"loc_1000205E",
        "out_false":"label_161",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     eax, dword_10008FEC" },
          { "str":"cmp     eax, 3" },
          { "str":"jnz     short loc_1000205E" }
        ],
        "callees":[]
      },
{
        "tag":"label_161",
        "label":"label_161",
        "out_true":"loc_100020A4",
        "out_false":"label_162",
        "last_inst":"ja",
        "instructions":[
          { "str":"mov     edi, [ebp+var_1C]" },
          { "str":"cmp     edi, dword_10008DB0" },
          { "str":"ja      short loc_100020A4" }
        ],
        "callees":[]
      },
{
        "tag":"label_162",
        "label":"label_162",
        "out_true":"loc_10002046",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    9" },
          { "str":"call    sub_10001F46" },
          { "str":"pop     ecx" },
          { "str":"mov     [ebp+ms_exc.registration.TryLevel], ebx" },
          { "str":"push    edi" },
          { "str":"call    sub_1000333B" },
          { "str":"pop     ecx" },
          { "str":"mov     [ebp+var_20], eax" },
          { "str":"or      [ebp+ms_exc.registration.TryLevel], 0FFFFFFFFh" },
          { "str":"call    loc_10002055" }
        ],
        "callees":[
          { "tag":"loc_10002055" },
          { "tag":"sub_10001F46" },
          { "tag":"sub_1000333B" }
        ]
      },
{
        "tag":"loc_10002046",
        "label":"loc_10002046",
        "out_true":"loc_100020A9",
        "out_false":"label_163",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     [ebp+var_20], ebx" },
          { "str":"jz      short loc_100020A9" }
        ],
        "callees":[]
      },
{
        "tag":"label_163",
        "label":"label_163",
        "out_true":"loc_10002098",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    [ebp+var_1C]" },
          { "str":"jmp     short loc_10002098" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002050",
        "label":"loc_10002050",
        "out_true":"loc_10002055",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     ebx, ebx" },
          { "str":"mov     esi, [ebp+arg_4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002055",
        "label":"loc_10002055",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    9" },
          { "str":"call    sub_10001FA7" },
          { "str":"pop     ecx" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"sub_10001FA7" }
        ]
      }
    ]
  },{
    "tag":"rtn_1",
    "label":"rtn_1",
    "type":"ours",
    "callees":[
      { "tag":"ds_HeapAlloc" },
      { "tag":"loc_100020DE" },
      { "tag":"sub_10001F46" },
      { "tag":"sub_10001FA7" },
      { "tag":"sub_10003AE8" },
      { "tag":"sub_10003F9E" },
      { "tag":"sub_10003FC0" }
    ],
    "blocks":[
      {
        "tag":"loc_1000205E",
        "label":"loc_1000205E",
        "out_true":"loc_100020A4",
        "out_false":"label_164",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     eax, 2" },
          { "str":"jnz     short loc_100020A4" }
        ],
        "callees":[]
      },
{
        "tag":"label_164",
        "label":"label_164",
        "out_true":"loc_100020A4",
        "out_false":"label_165",
        "last_inst":"ja",
        "instructions":[
          { "str":"cmp     esi, dword_10008364" },
          { "str":"ja      short loc_100020A4" }
        ],
        "callees":[]
      },
{
        "tag":"label_165",
        "label":"label_165",
        "out_true":"loc_10002092",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    9" },
          { "str":"call    sub_10001F46" },
          { "str":"pop     ecx" },
          { "str":"mov     [ebp+ms_exc.registration.TryLevel], 1" },
          { "str":"mov     eax, esi" },
          { "str":"shr     eax, 4" },
          { "str":"push    eax" },
          { "str":"call    sub_10003AE8" },
          { "str":"pop     ecx" },
          { "str":"mov     [ebp+var_20], eax" },
          { "str":"or      [ebp+ms_exc.registration.TryLevel], 0FFFFFFFFh" },
          { "str":"call    loc_100020DE" }
        ],
        "callees":[
          { "tag":"loc_100020DE" },
          { "tag":"sub_10001F46" },
          { "tag":"sub_10003AE8" }
        ]
      },
{
        "tag":"loc_10002092",
        "label":"loc_10002092",
        "out_true":"loc_100020A9",
        "out_false":"label_166",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     [ebp+var_20], ebx" },
          { "str":"jz      short loc_100020A9" }
        ],
        "callees":[]
      },
{
        "tag":"label_166",
        "label":"label_166",
        "out_true":"loc_10002098",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002098",
        "label":"loc_10002098",
        "out_true":"loc_100020A4",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"push    [ebp+var_20]" },
          { "str":"call    sub_10003FC0" },
          { "str":"add     esp, 0Ch" }
        ],
        "callees":[
          { "tag":"sub_10003FC0" }
        ]
      },
{
        "tag":"loc_100020A4",
        "label":"loc_100020A4",
        "out_true":"loc_100020E7",
        "out_false":"loc_100020A9",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     [ebp+var_20], ebx" },
          { "str":"jnz     short loc_100020E7" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100020A9",
        "label":"loc_100020A9",
        "out_true":"loc_100020BB",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    esi" },
          { "str":"push    8" },
          { "str":"push    hHeap" },
          { "str":"call    ds:HeapAlloc" },
          { "str":"mov     [ebp+var_20], eax" }
        ],
        "callees":[
          { "tag":"ds_HeapAlloc" }
        ]
      },
{
        "tag":"loc_100020BB",
        "label":"loc_100020BB",
        "out_true":"loc_100020E7",
        "out_false":"label_167",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     [ebp+var_20], ebx" },
          { "str":"jnz     short loc_100020E7" }
        ],
        "callees":[]
      },
{
        "tag":"label_167",
        "label":"label_167",
        "out_true":"loc_100020E7",
        "out_false":"label_168",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     dword_10008C18, ebx" },
          { "str":"jz      short loc_100020E7" }
        ],
        "callees":[]
      },
{
        "tag":"label_168",
        "label":"label_168",
        "out_true":"loc_10002007",
        "out_false":"label_169",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    esi" },
          { "str":"call    sub_10003F9E" },
          { "str":"pop     ecx" },
          { "str":"test    eax, eax" },
          { "str":"jnz     loc_10002007" }
        ],
        "callees":[
          { "tag":"sub_10003F9E" }
        ]
      },
{
        "tag":"label_169",
        "label":"label_169",
        "out_true":"loc_100020EA",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     short loc_100020EA" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100020D9",
        "label":"loc_100020D9",
        "out_true":"loc_100020DE",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     ebx, ebx" },
          { "str":"mov     esi, [ebp+arg_4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100020DE",
        "label":"loc_100020DE",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    9" },
          { "str":"call    sub_10001FA7" },
          { "str":"pop     ecx" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"sub_10001FA7" }
        ]
      },
{
        "tag":"loc_100020E7",
        "label":"loc_100020E7",
        "out_true":"loc_100020EA",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [ebp+var_20]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100020EA",
        "label":"loc_100020EA",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     ecx, [ebp+ms_exc.registration.Next]" },
          { "str":"mov     large fs:0, ecx" },
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_100020F9",
    "label":"sub_100020F9",
    "type":"idapro",
    "callees":[
      { "tag":"loc_10002163" },
      { "tag":"sub_10001F46" },
      { "tag":"sub_10001FA7" },
      { "tag":"sub_10002FE7" },
      { "tag":"sub_10003012" }
    ],
    "blocks":[
      {
        "tag":"sub_100020F9",
        "label":"sub_100020F9",
        "out_true":"loc_100021D3",
        "out_false":"label_170",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    0FFFFFFFFh" },
          { "str":"push    offset stru_10005408" },
          { "str":"push    offset sub_10004110" },
          { "str":"mov     eax, large fs:0" },
          { "str":"push    eax" },
          { "str":"mov     large fs:0, esp" },
          { "str":"sub     esp, 18h" },
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"mov     esi, [ebp+arg_0]" },
          { "str":"test    esi, esi" },
          { "str":"jz      loc_100021D3" }
        ],
        "callees":[]
      },
{
        "tag":"label_170",
        "label":"label_170",
        "out_true":"loc_1000216C",
        "out_false":"label_171",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     eax, dword_10008FEC" },
          { "str":"cmp     eax, 3" },
          { "str":"jnz     short loc_1000216C" }
        ],
        "callees":[]
      },
{
        "tag":"label_171",
        "label":"label_171",
        "out_true":"loc_10002154",
        "out_false":"label_172",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    9" },
          { "str":"call    sub_10001F46" },
          { "str":"pop     ecx" },
          { "str":"and     [ebp+ms_exc.registration.TryLevel], 0" },
          { "str":"push    esi" },
          { "str":"call    sub_10002FE7" },
          { "str":"pop     ecx" },
          { "str":"mov     [ebp+var_1C], eax" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10002154" }
        ],
        "callees":[
          { "tag":"sub_10001F46" },
          { "tag":"sub_10002FE7" }
        ]
      },
{
        "tag":"label_172",
        "label":"label_172",
        "out_true":"loc_10002154",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    esi" },
          { "str":"push    eax" },
          { "str":"call    sub_10003012" },
          { "str":"pop     ecx" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_10003012" }
        ]
      },
{
        "tag":"loc_10002154",
        "label":"loc_10002154",
        "out_true":"loc_1000215D",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"or      [ebp+ms_exc.registration.TryLevel], 0FFFFFFFFh" },
          { "str":"call    loc_10002163" }
        ],
        "callees":[
          { "tag":"loc_10002163" }
        ]
      },
{
        "tag":"loc_1000215D",
        "label":"loc_1000215D",
        "out_true":"loc_100021B4",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"cmp     [ebp+var_1C], 0" },
          { "str":"jmp     short loc_100021B4" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002163",
        "label":"loc_10002163",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    9" },
          { "str":"call    sub_10001FA7" },
          { "str":"pop     ecx" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"sub_10001FA7" }
        ]
      }
    ]
  },{
    "tag":"rtn_2",
    "label":"rtn_2",
    "type":"ours",
    "callees":[
      { "tag":"ds_HeapFree" },
      { "tag":"loc_100021BB" },
      { "tag":"sub_10001F46" },
      { "tag":"sub_10001FA7" },
      { "tag":"sub_10003A4C" },
      { "tag":"sub_10003AA3" }
    ],
    "blocks":[
      {
        "tag":"loc_1000216C",
        "label":"loc_1000216C",
        "out_true":"loc_100021C4",
        "out_false":"label_173",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     eax, 2" },
          { "str":"jnz     short loc_100021C4" }
        ],
        "callees":[]
      },
{
        "tag":"label_173",
        "label":"label_173",
        "out_true":"loc_100021A7",
        "out_false":"label_174",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    9" },
          { "str":"call    sub_10001F46" },
          { "str":"pop     ecx" },
          { "str":"mov     [ebp+ms_exc.registration.TryLevel], 1" },
          { "str":"lea     eax, [ebp+var_20]" },
          { "str":"push    eax" },
          { "str":"lea     eax, [ebp+var_28]" },
          { "str":"push    eax" },
          { "str":"push    esi" },
          { "str":"call    sub_10003A4C" },
          { "str":"add     esp, 0Ch" },
          { "str":"mov     [ebp+var_24], eax" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_100021A7" }
        ],
        "callees":[
          { "tag":"sub_10001F46" },
          { "tag":"sub_10003A4C" }
        ]
      },
{
        "tag":"label_174",
        "label":"label_174",
        "out_true":"loc_100021A7",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    eax" },
          { "str":"push    [ebp+var_20]" },
          { "str":"push    [ebp+var_28]" },
          { "str":"call    sub_10003AA3" },
          { "str":"add     esp, 0Ch" }
        ],
        "callees":[
          { "tag":"sub_10003AA3" }
        ]
      },
{
        "tag":"loc_100021A7",
        "label":"loc_100021A7",
        "out_true":"loc_100021B0",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"or      [ebp+ms_exc.registration.TryLevel], 0FFFFFFFFh" },
          { "str":"call    loc_100021BB" }
        ],
        "callees":[
          { "tag":"loc_100021BB" }
        ]
      },
{
        "tag":"loc_100021B0",
        "label":"loc_100021B0",
        "out_true":"loc_100021B4",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"cmp     [ebp+var_24], 0" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100021B4",
        "label":"loc_100021B4",
        "out_true":"loc_100021D3",
        "out_false":"label_175",
        "last_inst":"jnz",
        "instructions":[
          { "str":"jnz     short loc_100021D3" }
        ],
        "callees":[]
      },
{
        "tag":"label_175",
        "label":"label_175",
        "out_true":"loc_100021C5",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    [ebp+arg_0]" },
          { "str":"jmp     short loc_100021C5" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100021BB",
        "label":"loc_100021BB",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    9" },
          { "str":"call    sub_10001FA7" },
          { "str":"pop     ecx" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"sub_10001FA7" }
        ]
      },
{
        "tag":"loc_100021C4",
        "label":"loc_100021C4",
        "out_true":"loc_100021C5",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100021C5",
        "label":"loc_100021C5",
        "out_true":"loc_100021D3",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    0" },
          { "str":"push    hHeap" },
          { "str":"call    ds:HeapFree" }
        ],
        "callees":[
          { "tag":"ds_HeapFree" }
        ]
      },
{
        "tag":"loc_100021D3",
        "label":"loc_100021D3",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     ecx, [ebp+ms_exc.registration.Next]" },
          { "str":"mov     large fs:0, ecx" },
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_100021E2",
    "label":"sub_100021E2",
    "type":"idapro",
    "callees":[
      { "tag":"sub_100021F4" }
    ],
    "blocks":[
      {
        "tag":"sub_100021E2",
        "label":"sub_100021E2",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    dword_10008C18" },
          { "str":"push    [esp+4+arg_0]" },
          { "str":"call    sub_100021F4" },
          { "str":"pop     ecx" },
          { "str":"pop     ecx" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"sub_100021F4" }
        ]
      }
    ]
  },{
    "tag":"sub_100021F4",
    "label":"sub_100021F4",
    "type":"idapro",
    "callees":[
      { "tag":"sub_10002220" },
      { "tag":"sub_10003F9E" }
    ],
    "blocks":[
      {
        "tag":"sub_100021F4",
        "label":"sub_100021F4",
        "out_true":"loc_1000221D",
        "out_false":"loc_100021FB",
        "last_inst":"ja",
        "instructions":[
          { "str":"cmp     [esp+arg_0], 0FFFFFFE0h" },
          { "str":"ja      short loc_1000221D" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100021FB",
        "label":"loc_100021FB",
        "out_true":"locret_1000221F",
        "out_false":"label_176",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    [esp+arg_0]" },
          { "str":"call    sub_10002220" },
          { "str":"test    eax, eax" },
          { "str":"pop     ecx" },
          { "str":"jnz     short locret_1000221F" }
        ],
        "callees":[
          { "tag":"sub_10002220" }
        ]
      },
{
        "tag":"label_176",
        "label":"label_176",
        "out_true":"locret_1000221F",
        "out_false":"label_177",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     [esp+arg_4], eax" },
          { "str":"jz      short locret_1000221F" }
        ],
        "callees":[]
      },
{
        "tag":"label_177",
        "label":"label_177",
        "out_true":"loc_100021FB",
        "out_false":"loc_1000221D",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    [esp+arg_0]" },
          { "str":"call    sub_10003F9E" },
          { "str":"test    eax, eax" },
          { "str":"pop     ecx" },
          { "str":"jnz     short loc_100021FB" }
        ],
        "callees":[
          { "tag":"sub_10003F9E" }
        ]
      },
{
        "tag":"loc_1000221D",
        "label":"loc_1000221D",
        "out_true":"locret_1000221F",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     eax, eax" }
        ],
        "callees":[]
      },
{
        "tag":"locret_1000221F",
        "label":"locret_1000221F",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10002220",
    "label":"sub_10002220",
    "type":"idapro",
    "callees":[
      { "tag":"loc_10002287" },
      { "tag":"sub_10001F46" },
      { "tag":"sub_10001FA7" },
      { "tag":"sub_1000333B" }
    ],
    "blocks":[
      {
        "tag":"sub_10002220",
        "label":"sub_10002220",
        "out_true":"loc_10002290",
        "out_false":"label_178",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    0FFFFFFFFh" },
          { "str":"push    offset stru_10005420" },
          { "str":"push    offset sub_10004110" },
          { "str":"mov     eax, large fs:0" },
          { "str":"push    eax" },
          { "str":"mov     large fs:0, esp" },
          { "str":"sub     esp, 0Ch" },
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"mov     eax, dword_10008FEC" },
          { "str":"cmp     eax, 3" },
          { "str":"jnz     short loc_10002290" }
        ],
        "callees":[]
      },
{
        "tag":"label_178",
        "label":"label_178",
        "out_true":"loc_100022EF",
        "out_false":"label_179",
        "last_inst":"ja",
        "instructions":[
          { "str":"mov     esi, [ebp+arg_0]" },
          { "str":"cmp     esi, dword_10008DB0" },
          { "str":"ja      loc_100022EF" }
        ],
        "callees":[]
      },
{
        "tag":"label_179",
        "label":"label_179",
        "out_true":"loc_1000227B",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    9" },
          { "str":"call    sub_10001F46" },
          { "str":"pop     ecx" },
          { "str":"and     [ebp+ms_exc.registration.TryLevel], 0" },
          { "str":"push    esi" },
          { "str":"call    sub_1000333B" },
          { "str":"pop     ecx" },
          { "str":"mov     [ebp+var_1C], eax" },
          { "str":"or      [ebp+ms_exc.registration.TryLevel], 0FFFFFFFFh" },
          { "str":"call    loc_10002287" }
        ],
        "callees":[
          { "tag":"loc_10002287" },
          { "tag":"sub_10001F46" },
          { "tag":"sub_1000333B" }
        ]
      },
{
        "tag":"loc_1000227B",
        "label":"loc_1000227B",
        "out_true":"loc_100022EF",
        "out_false":"label_180",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [ebp+var_1C]" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_100022EF" }
        ],
        "callees":[]
      },
{
        "tag":"label_180",
        "label":"label_180",
        "out_true":"loc_1000230D",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     loc_1000230D" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002287",
        "label":"loc_10002287",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    9" },
          { "str":"call    sub_10001FA7" },
          { "str":"pop     ecx" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"sub_10001FA7" }
        ]
      }
    ]
  },{
    "tag":"rtn_3",
    "label":"rtn_3",
    "type":"ours",
    "callees":[
      { "tag":"ds_HeapAlloc" },
      { "tag":"loc_100022E6" },
      { "tag":"sub_10001F46" },
      { "tag":"sub_10001FA7" },
      { "tag":"sub_10003AE8" }
    ],
    "blocks":[
      {
        "tag":"loc_10002290",
        "label":"loc_10002290",
        "out_true":"loc_100022EF",
        "out_false":"label_181",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     eax, 2" },
          { "str":"jnz     short loc_100022EF" }
        ],
        "callees":[]
      },
{
        "tag":"label_181",
        "label":"label_181",
        "out_true":"loc_100022A4",
        "out_false":"label_182",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_100022A4" }
        ],
        "callees":[]
      },
{
        "tag":"label_182",
        "label":"label_182",
        "out_true":"loc_100022A7",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"lea     esi, [eax+0Fh]" },
          { "str":"and     esi, 0FFFFFFF0h" },
          { "str":"jmp     short loc_100022A7" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100022A4",
        "label":"loc_100022A4",
        "out_true":"loc_100022A7",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    10h" },
          { "str":"pop     esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100022A7",
        "label":"loc_100022A7",
        "out_true":"loc_100022E0",
        "out_false":"label_183",
        "last_inst":"ja",
        "instructions":[
          { "str":"mov     [ebp+arg_0], esi" },
          { "str":"cmp     esi, dword_10008364" },
          { "str":"ja      short loc_100022E0" }
        ],
        "callees":[]
      },
{
        "tag":"label_183",
        "label":"label_183",
        "out_true":"loc_100022D9",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    9" },
          { "str":"call    sub_10001F46" },
          { "str":"pop     ecx" },
          { "str":"mov     [ebp+ms_exc.registration.TryLevel], 1" },
          { "str":"mov     eax, esi" },
          { "str":"shr     eax, 4" },
          { "str":"push    eax" },
          { "str":"call    sub_10003AE8" },
          { "str":"pop     ecx" },
          { "str":"mov     [ebp+var_1C], eax" },
          { "str":"or      [ebp+ms_exc.registration.TryLevel], 0FFFFFFFFh" },
          { "str":"call    loc_100022E6" }
        ],
        "callees":[
          { "tag":"loc_100022E6" },
          { "tag":"sub_10001F46" },
          { "tag":"sub_10003AE8" }
        ]
      },
{
        "tag":"loc_100022D9",
        "label":"loc_100022D9",
        "out_true":"loc_1000230D",
        "out_false":"loc_100022E0",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     eax, [ebp+var_1C]" },
          { "str":"test    eax, eax" },
          { "str":"jnz     short loc_1000230D" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100022E0",
        "label":"loc_100022E0",
        "out_true":"loc_100022FF",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    esi" },
          { "str":"jmp     short loc_100022FF" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100022E3",
        "label":"loc_100022E3",
        "out_true":"loc_100022E6",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     esi, [ebp+arg_0]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100022E6",
        "label":"loc_100022E6",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    9" },
          { "str":"call    sub_10001FA7" },
          { "str":"pop     ecx" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"sub_10001FA7" }
        ]
      },
{
        "tag":"loc_100022EF",
        "label":"loc_100022EF",
        "out_true":"loc_100022F9",
        "out_false":"label_184",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"test    eax, eax" },
          { "str":"jnz     short loc_100022F9" }
        ],
        "callees":[]
      },
{
        "tag":"label_184",
        "label":"label_184",
        "out_true":"loc_100022F9",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    1" },
          { "str":"pop     eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100022F9",
        "label":"loc_100022F9",
        "out_true":"loc_100022FF",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"add     eax, 0Fh" },
          { "str":"and     al, 0F0h" },
          { "str":"push    eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100022FF",
        "label":"loc_100022FF",
        "out_true":"loc_1000230D",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    0" },
          { "str":"push    hHeap" },
          { "str":"call    ds:HeapAlloc" }
        ],
        "callees":[
          { "tag":"ds_HeapAlloc" }
        ]
      },
{
        "tag":"loc_1000230D",
        "label":"loc_1000230D",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     ecx, [ebp+ms_exc.registration.Next]" },
          { "str":"mov     large fs:0, ecx" },
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10002320",
    "label":"sub_10002320",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_10002320",
        "label":"sub_10002320",
        "out_true":"loc_10002391",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    edi" },
          { "str":"mov     edi, [esp+4+arg_0]" },
          { "str":"jmp     short loc_10002391" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10002330",
    "label":"sub_10002330",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_10002330",
        "label":"sub_10002330",
        "out_true":"loc_1000234C",
        "out_false":"loc_1000233D",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     ecx, [esp+arg_0]" },
          { "str":"push    edi" },
          { "str":"test    ecx, 3" },
          { "str":"jz      short loc_1000234C" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000233D",
        "label":"loc_1000233D",
        "out_true":"loc_1000237F",
        "out_false":"label_185",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     al, [ecx]" },
          { "str":"inc     ecx" },
          { "str":"test    al, al" },
          { "str":"jz      short loc_1000237F" }
        ],
        "callees":[]
      },
{
        "tag":"label_185",
        "label":"label_185",
        "out_true":"loc_1000233D",
        "out_false":"loc_1000234C",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    ecx, 3" },
          { "str":"jnz     short loc_1000233D" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000234C",
        "label":"loc_1000234C",
        "out_true":"loc_1000234C",
        "out_false":"label_186",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [ecx]" },
          { "str":"mov     edx, 7EFEFEFFh" },
          { "str":"add     edx, eax" },
          { "str":"xor     eax, 0FFFFFFFFh" },
          { "str":"xor     eax, edx" },
          { "str":"add     ecx, 4" },
          { "str":"test    eax, 81010100h" },
          { "str":"jz      short loc_1000234C" }
        ],
        "callees":[]
      },
{
        "tag":"label_186",
        "label":"label_186",
        "out_true":"loc_1000238E",
        "out_false":"label_187",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [ecx-4]" },
          { "str":"test    al, al" },
          { "str":"jz      short loc_1000238E" }
        ],
        "callees":[]
      },
{
        "tag":"label_187",
        "label":"label_187",
        "out_true":"loc_10002389",
        "out_false":"label_188",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    ah, ah" },
          { "str":"jz      short loc_10002389" }
        ],
        "callees":[]
      },
{
        "tag":"label_188",
        "label":"label_188",
        "out_true":"loc_10002384",
        "out_false":"label_189",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    eax, 0FF0000h" },
          { "str":"jz      short loc_10002384" }
        ],
        "callees":[]
      },
{
        "tag":"label_189",
        "label":"label_189",
        "out_true":"loc_1000237F",
        "out_false":"label_190",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    eax, 0FF000000h" },
          { "str":"jz      short loc_1000237F" }
        ],
        "callees":[]
      },
{
        "tag":"label_190",
        "label":"label_190",
        "out_true":"loc_1000234C",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     short loc_1000234C" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000237F",
        "label":"loc_1000237F",
        "out_true":"loc_10002391",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"lea     edi, [ecx-1]" },
          { "str":"jmp     short loc_10002391" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002384",
        "label":"loc_10002384",
        "out_true":"loc_10002391",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"lea     edi, [ecx-2]" },
          { "str":"jmp     short loc_10002391" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002389",
        "label":"loc_10002389",
        "out_true":"loc_10002391",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"lea     edi, [ecx-3]" },
          { "str":"jmp     short loc_10002391" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000238E",
        "label":"loc_1000238E",
        "out_true":"loc_10002391",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"lea     edi, [ecx-4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002391",
        "label":"loc_10002391",
        "out_true":"loc_100023B6",
        "out_false":"loc_1000239D",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     ecx, [esp+4+arg_4]" },
          { "str":"test    ecx, 3" },
          { "str":"jz      short loc_100023B6" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000239D",
        "label":"loc_1000239D",
        "out_true":"loc_10002408",
        "out_false":"label_191",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     dl, [ecx]" },
          { "str":"inc     ecx" },
          { "str":"test    dl, dl" },
          { "str":"jz      short loc_10002408" }
        ],
        "callees":[]
      },
{
        "tag":"label_191",
        "label":"label_191",
        "out_true":"loc_1000239D",
        "out_false":"label_192",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     [edi], dl" },
          { "str":"inc     edi" },
          { "str":"test    ecx, 3" },
          { "str":"jnz     short loc_1000239D" }
        ],
        "callees":[]
      },
{
        "tag":"label_192",
        "label":"label_192",
        "out_true":"loc_100023B6",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     short loc_100023B6" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100023B1",
        "label":"loc_100023B1",
        "out_true":"loc_100023B6",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     [edi], edx" },
          { "str":"add     edi, 4" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100023B6",
        "label":"loc_100023B6",
        "out_true":"loc_100023B1",
        "out_false":"label_193",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     edx, 7EFEFEFFh" },
          { "str":"mov     eax, [ecx]" },
          { "str":"add     edx, eax" },
          { "str":"xor     eax, 0FFFFFFFFh" },
          { "str":"xor     eax, edx" },
          { "str":"mov     edx, [ecx]" },
          { "str":"add     ecx, 4" },
          { "str":"test    eax, 81010100h" },
          { "str":"jz      short loc_100023B1" }
        ],
        "callees":[]
      },
{
        "tag":"label_193",
        "label":"label_193",
        "out_true":"loc_10002408",
        "out_false":"label_194",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    dl, dl" },
          { "str":"jz      short loc_10002408" }
        ],
        "callees":[]
      },
{
        "tag":"label_194",
        "label":"label_194",
        "out_true":"loc_100023FF",
        "out_false":"label_195",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    dh, dh" },
          { "str":"jz      short loc_100023FF" }
        ],
        "callees":[]
      },
{
        "tag":"label_195",
        "label":"label_195",
        "out_true":"loc_100023F2",
        "out_false":"label_196",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    edx, 0FF0000h" },
          { "str":"jz      short loc_100023F2" }
        ],
        "callees":[]
      },
{
        "tag":"label_196",
        "label":"label_196",
        "out_true":"loc_100023EA",
        "out_false":"label_197",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    edx, 0FF000000h" },
          { "str":"jz      short loc_100023EA" }
        ],
        "callees":[]
      },
{
        "tag":"label_197",
        "label":"label_197",
        "out_true":"loc_100023B1",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     short loc_100023B1" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100023EA",
        "label":"loc_100023EA",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     [edi], edx" },
          { "str":"mov     eax, [esp+4+arg_0]" },
          { "str":"pop     edi" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100023F2",
        "label":"loc_100023F2",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     [edi], dx" },
          { "str":"mov     eax, [esp+4+arg_0]" },
          { "str":"mov     byte ptr [edi+2], 0" },
          { "str":"pop     edi" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100023FF",
        "label":"loc_100023FF",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     [edi], dx" },
          { "str":"mov     eax, [esp+4+arg_0]" },
          { "str":"pop     edi" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002408",
        "label":"loc_10002408",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     [edi], dl" },
          { "str":"mov     eax, [esp+4+arg_0]" },
          { "str":"pop     edi" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10002410",
    "label":"sub_10002410",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_10002410",
        "label":"sub_10002410",
        "out_true":"loc_10002430",
        "out_false":"loc_1000241C",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     ecx, [esp+arg_0]" },
          { "str":"test    ecx, 3" },
          { "str":"jz      short loc_10002430" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000241C",
        "label":"loc_1000241C",
        "out_true":"loc_10002463",
        "out_false":"label_198",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     al, [ecx]" },
          { "str":"inc     ecx" },
          { "str":"test    al, al" },
          { "str":"jz      short loc_10002463" }
        ],
        "callees":[]
      },
{
        "tag":"label_198",
        "label":"label_198",
        "out_true":"loc_1000241C",
        "out_false":"label_199",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    ecx, 3" },
          { "str":"jnz     short loc_1000241C" }
        ],
        "callees":[]
      },
{
        "tag":"label_199",
        "label":"label_199",
        "out_true":"loc_10002430",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"add     eax, 0" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002430",
        "label":"loc_10002430",
        "out_true":"loc_10002430",
        "out_false":"label_200",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [ecx]" },
          { "str":"mov     edx, 7EFEFEFFh" },
          { "str":"add     edx, eax" },
          { "str":"xor     eax, 0FFFFFFFFh" },
          { "str":"xor     eax, edx" },
          { "str":"add     ecx, 4" },
          { "str":"test    eax, 81010100h" },
          { "str":"jz      short loc_10002430" }
        ],
        "callees":[]
      },
{
        "tag":"label_200",
        "label":"label_200",
        "out_true":"loc_10002481",
        "out_false":"label_201",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [ecx-4]" },
          { "str":"test    al, al" },
          { "str":"jz      short loc_10002481" }
        ],
        "callees":[]
      },
{
        "tag":"label_201",
        "label":"label_201",
        "out_true":"loc_10002477",
        "out_false":"label_202",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    ah, ah" },
          { "str":"jz      short loc_10002477" }
        ],
        "callees":[]
      },
{
        "tag":"label_202",
        "label":"label_202",
        "out_true":"loc_1000246D",
        "out_false":"label_203",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    eax, 0FF0000h" },
          { "str":"jz      short loc_1000246D" }
        ],
        "callees":[]
      },
{
        "tag":"label_203",
        "label":"label_203",
        "out_true":"loc_10002463",
        "out_false":"label_204",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    eax, 0FF000000h" },
          { "str":"jz      short loc_10002463" }
        ],
        "callees":[]
      },
{
        "tag":"label_204",
        "label":"label_204",
        "out_true":"loc_10002430",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     short loc_10002430" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002463",
        "label":"loc_10002463",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"lea     eax, [ecx-1]" },
          { "str":"mov     ecx, [esp+arg_0]" },
          { "str":"sub     eax, ecx" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000246D",
        "label":"loc_1000246D",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"lea     eax, [ecx-2]" },
          { "str":"mov     ecx, [esp+arg_0]" },
          { "str":"sub     eax, ecx" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002477",
        "label":"loc_10002477",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"lea     eax, [ecx-3]" },
          { "str":"mov     ecx, [esp+arg_0]" },
          { "str":"sub     eax, ecx" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002481",
        "label":"loc_10002481",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"lea     eax, [ecx-4]" },
          { "str":"mov     ecx, [esp+arg_0]" },
          { "str":"sub     eax, ecx" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_1000248B",
    "label":"sub_1000248B",
    "type":"idapro",
    "callees":[
      { "tag":"ds_GetCPInfo" },
      { "tag":"sub_10001F46" },
      { "tag":"sub_10001FA7" },
      { "tag":"sub_10002638" },
      { "tag":"sub_10002682" },
      { "tag":"sub_100026B5" },
      { "tag":"sub_100026DE" }
    ],
    "blocks":[
      {
        "tag":"sub_1000248B",
        "label":"sub_1000248B",
        "out_true":"loc_100024B9",
        "out_false":"loc_100024B2",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"sub     esp, 18h" },
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"push    19h" },
          { "str":"call    sub_10001F46" },
          { "str":"push    [ebp+arg_0]" },
          { "str":"call    sub_10002638" },
          { "str":"mov     ebx, eax" },
          { "str":"pop     ecx" },
          { "str":"cmp     ebx, CodePage" },
          { "str":"pop     ecx" },
          { "str":"mov     [ebp+arg_0], ebx" },
          { "str":"jnz     short loc_100024B9" }
        ],
        "callees":[
          { "tag":"sub_10001F46" },
          { "tag":"sub_10002638" }
        ]
      },
{
        "tag":"loc_100024B2",
        "label":"loc_100024B2",
        "out_true":"loc_10002629",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"xor     esi, esi" },
          { "str":"jmp     loc_10002629" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100024B9",
        "label":"loc_100024B9",
        "out_true":"loc_10002617",
        "out_false":"label_205",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    ebx, ebx" },
          { "str":"jz      loc_10002617" }
        ],
        "callees":[]
      },
{
        "tag":"label_205",
        "label":"label_205",
        "out_true":"loc_100024C8",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     edx, edx" },
          { "str":"mov     eax, offset unk_10006248" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100024C8",
        "label":"loc_100024C8",
        "out_true":"loc_10002540",
        "out_false":"label_206",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     [eax], ebx" },
          { "str":"jz      short loc_10002540" }
        ],
        "callees":[]
      },
{
        "tag":"label_206",
        "label":"label_206",
        "out_true":"loc_100024C8",
        "out_false":"label_207",
        "last_inst":"jb",
        "instructions":[
          { "str":"add     eax, 30h" },
          { "str":"inc     edx" },
          { "str":"cmp     eax, offset unk_10006338" },
          { "str":"jb      short loc_100024C8" }
        ],
        "callees":[]
      },
{
        "tag":"label_207",
        "label":"label_207",
        "out_true":"loc_1000260E",
        "out_false":"label_208",
        "last_inst":"jnz",
        "instructions":[
          { "str":"lea     eax, [ebp+CPInfo]" },
          { "str":"push    eax" },
          { "str":"push    ebx" },
          { "str":"call    ds:GetCPInfo" },
          { "str":"push    1" },
          { "str":"pop     esi" },
          { "str":"cmp     eax, esi" },
          { "str":"jnz     loc_1000260E" }
        ],
        "callees":[
          { "tag":"ds_GetCPInfo" }
        ]
      },
{
        "tag":"label_208",
        "label":"label_208",
        "out_true":"loc_100025FB",
        "out_false":"label_209",
        "last_inst":"jb",
        "instructions":[
          { "str":"push    40h" },
          { "str":"and     Locale, 0" },
          { "str":"pop     ecx" },
          { "str":"xor     eax, eax" },
          { "str":"mov     edi, offset unk_10008EE0" },
          { "str":"cmp     [ebp+CPInfo.MaxCharSize], esi" },
          { "str":"rep stosd" },
          { "str":"stosb" },
          { "str":"mov     CodePage, ebx" },
          { "str":"jbe     loc_100025FB" }
        ],
        "callees":[]
      },
{
        "tag":"label_209",
        "label":"label_209",
        "out_true":"loc_100025D6",
        "out_false":"label_210",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     [ebp+CPInfo.LeadByte], 0" },
          { "str":"jz      loc_100025D6" }
        ],
        "callees":[]
      },
{
        "tag":"label_210",
        "label":"label_210",
        "out_true":"loc_1000251D",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"lea     ecx, [ebp+CPInfo.LeadByte+1]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000251D",
        "label":"loc_1000251D",
        "out_true":"loc_100025D6",
        "out_false":"label_211",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     dl, [ecx]" },
          { "str":"test    dl, dl" },
          { "str":"jz      loc_100025D6" }
        ],
        "callees":[]
      },
{
        "tag":"label_211",
        "label":"label_211",
        "out_true":"loc_1000252E",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"movzx   eax, byte ptr [ecx-1]" },
          { "str":"movzx   edx, dl" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000252E",
        "label":"loc_1000252E",
        "out_true":"loc_100025CA",
        "out_false":"label_212",
        "last_inst":"ja",
        "instructions":[
          { "str":"cmp     eax, edx" },
          { "str":"ja      loc_100025CA" }
        ],
        "callees":[]
      },
{
        "tag":"label_212",
        "label":"label_212",
        "out_true":"loc_1000252E",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"or      byte_10008EE1[eax], 4" },
          { "str":"inc     eax" },
          { "str":"jmp     short loc_1000252E" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002540",
        "label":"loc_10002540",
        "out_true":"loc_1000255D",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"and     [ebp+var_4], 0" },
          { "str":"push    40h" },
          { "str":"pop     ecx" },
          { "str":"xor     eax, eax" },
          { "str":"mov     edi, offset unk_10008EE0" },
          { "str":"lea     esi, [edx+edx*2]" },
          { "str":"rep stosd" },
          { "str":"shl     esi, 4" },
          { "str":"stosb" },
          { "str":"lea     ebx, aJ[esi]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000255D",
        "label":"loc_1000255D",
        "out_true":"loc_10002590",
        "out_false":"loc_10002564",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     byte ptr [ebx], 0" },
          { "str":"mov     ecx, ebx" },
          { "str":"jz      short loc_10002590" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002564",
        "label":"loc_10002564",
        "out_true":"loc_10002590",
        "out_false":"label_213",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     dl, [ecx+1]" },
          { "str":"test    dl, dl" },
          { "str":"jz      short loc_10002590" }
        ],
        "callees":[]
      },
{
        "tag":"label_213",
        "label":"label_213",
        "out_true":"loc_10002589",
        "out_false":"label_214",
        "last_inst":"ja",
        "instructions":[
          { "str":"movzx   eax, byte ptr [ecx]" },
          { "str":"movzx   edi, dl" },
          { "str":"cmp     eax, edi" },
          { "str":"ja      short loc_10002589" }
        ],
        "callees":[]
      },
{
        "tag":"label_214",
        "label":"label_214",
        "out_true":"loc_1000257E",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     edx, [ebp+var_4]" },
          { "str":"mov     dl, byte_10006240[edx]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000257E",
        "label":"loc_1000257E",
        "out_true":"loc_1000257E",
        "out_false":"loc_10002589",
        "last_inst":"jb",
        "instructions":[
          { "str":"or      byte_10008EE1[eax], dl" },
          { "str":"inc     eax" },
          { "str":"cmp     eax, edi" },
          { "str":"jbe     short loc_1000257E" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002589",
        "label":"loc_10002589",
        "out_true":"loc_10002564",
        "out_false":"loc_10002590",
        "last_inst":"jnz",
        "instructions":[
          { "str":"inc     ecx" },
          { "str":"inc     ecx" },
          { "str":"cmp     byte ptr [ecx], 0" },
          { "str":"jnz     short loc_10002564" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002590",
        "label":"loc_10002590",
        "out_true":"loc_1000255D",
        "out_false":"label_215",
        "last_inst":"jb",
        "instructions":[
          { "str":"inc     [ebp+var_4]" },
          { "str":"add     ebx, 8" },
          { "str":"cmp     [ebp+var_4], 4" },
          { "str":"jb      short loc_1000255D" }
        ],
        "callees":[]
      },
{
        "tag":"label_215",
        "label":"label_215",
        "out_true":"loc_1000261C",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"mov     dword_10008DCC, 1" },
          { "str":"push    eax" },
          { "str":"mov     CodePage, eax" },
          { "str":"call    sub_10002682" },
          { "str":"lea     esi, aVyv[esi]" },
          { "str":"mov     edi, offset unk_10008DC0" },
          { "str":"movsd" },
          { "str":"movsd" },
          { "str":"pop     ecx" },
          { "str":"mov     Locale, eax" },
          { "str":"movsd" },
          { "str":"jmp     short loc_1000261C" }
        ],
        "callees":[
          { "tag":"sub_10002682" }
        ]
      },
{
        "tag":"loc_100025CA",
        "label":"loc_100025CA",
        "out_true":"loc_1000251D",
        "out_false":"loc_100025D6",
        "last_inst":"jnz",
        "instructions":[
          { "str":"inc     ecx" },
          { "str":"inc     ecx" },
          { "str":"cmp     byte ptr [ecx-1], 0" },
          { "str":"jnz     loc_1000251D" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100025D6",
        "label":"loc_100025D6",
        "out_true":"loc_100025D8",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100025D8",
        "label":"loc_100025D8",
        "out_true":"loc_100025D8",
        "out_false":"label_216",
        "last_inst":"jb",
        "instructions":[
          { "str":"or      byte_10008EE1[eax], 8" },
          { "str":"inc     eax" },
          { "str":"cmp     eax, 0FFh" },
          { "str":"jb      short loc_100025D8" }
        ],
        "callees":[]
      },
{
        "tag":"label_216",
        "label":"label_216",
        "out_true":"loc_10002602",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"call    sub_10002682" },
          { "str":"pop     ecx" },
          { "str":"mov     Locale, eax" },
          { "str":"mov     dword_10008DCC, esi" },
          { "str":"jmp     short loc_10002602" }
        ],
        "callees":[
          { "tag":"sub_10002682" }
        ]
      },
{
        "tag":"loc_100025FB",
        "label":"loc_100025FB",
        "out_true":"loc_10002602",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"and     dword_10008DCC, 0" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002602",
        "label":"loc_10002602",
        "out_true":"loc_1000261C",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"xor     eax, eax" },
          { "str":"mov     edi, offset unk_10008DC0" },
          { "str":"stosd" },
          { "str":"stosd" },
          { "str":"stosd" },
          { "str":"jmp     short loc_1000261C" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000260E",
        "label":"loc_1000260E",
        "out_true":"loc_10002626",
        "out_false":"loc_10002617",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     dword_10008C00, 0" },
          { "str":"jz      short loc_10002626" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002617",
        "label":"loc_10002617",
        "out_true":"loc_1000261C",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"call    sub_100026B5" }
        ],
        "callees":[
          { "tag":"sub_100026B5" }
        ]
      },
{
        "tag":"loc_1000261C",
        "label":"loc_1000261C",
        "out_true":"loc_100024B2",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"call    sub_100026DE" },
          { "str":"jmp     loc_100024B2" }
        ],
        "callees":[
          { "tag":"sub_100026DE" }
        ]
      },
{
        "tag":"loc_10002626",
        "label":"loc_10002626",
        "out_true":"loc_10002629",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"or      esi, 0FFFFFFFFh" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002629",
        "label":"loc_10002629",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    19h" },
          { "str":"call    sub_10001FA7" },
          { "str":"pop     ecx" },
          { "str":"mov     eax, esi" },
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"sub_10001FA7" }
        ]
      }
    ]
  },{
    "tag":"sub_10002638",
    "label":"sub_10002638",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_10002638",
        "label":"sub_10002638",
        "out_true":"loc_10002658",
        "out_false":"label_217",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     eax, [esp+arg_0]" },
          { "str":"and     dword_10008C00, 0" },
          { "str":"cmp     eax, 0FFFFFFFEh" },
          { "str":"jnz     short loc_10002658" }
        ],
        "callees":[]
      },
{
        "tag":"label_217",
        "label":"label_217",
        "out_true":"ds_GetOEMCP",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     dword_10008C00, 1" },
          { "str":"jmp     ds:GetOEMCP" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002658",
        "label":"loc_10002658",
        "out_true":"loc_1000266D",
        "out_false":"label_218",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     eax, 0FFFFFFFDh" },
          { "str":"jnz     short loc_1000266D" }
        ],
        "callees":[]
      },
{
        "tag":"label_218",
        "label":"label_218",
        "out_true":"ds_GetACP",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     dword_10008C00, 1" },
          { "str":"jmp     ds:GetACP" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000266D",
        "label":"loc_1000266D",
        "out_true":"locret_10002681",
        "out_false":"label_219",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     eax, 0FFFFFFFCh" },
          { "str":"jnz     short locret_10002681" }
        ],
        "callees":[]
      },
{
        "tag":"label_219",
        "label":"label_219",
        "out_true":"locret_10002681",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, dword_10008C34" },
          { "str":"mov     dword_10008C00, 1" }
        ],
        "callees":[]
      },
{
        "tag":"locret_10002681",
        "label":"locret_10002681",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10002682",
    "label":"sub_10002682",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_10002682",
        "label":"sub_10002682",
        "out_true":"loc_100026AF",
        "out_false":"label_220",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [esp+arg_0]" },
          { "str":"sub     eax, 3A4h" },
          { "str":"jz      short loc_100026AF" }
        ],
        "callees":[]
      },
{
        "tag":"label_220",
        "label":"label_220",
        "out_true":"loc_100026A9",
        "out_false":"label_221",
        "last_inst":"jz",
        "instructions":[
          { "str":"sub     eax, 4" },
          { "str":"jz      short loc_100026A9" }
        ],
        "callees":[]
      },
{
        "tag":"label_221",
        "label":"label_221",
        "out_true":"loc_100026A3",
        "out_false":"label_222",
        "last_inst":"jz",
        "instructions":[
          { "str":"sub     eax, 0Dh" },
          { "str":"jz      short loc_100026A3" }
        ],
        "callees":[]
      },
{
        "tag":"label_222",
        "label":"label_222",
        "out_true":"loc_1000269D",
        "out_false":"label_223",
        "last_inst":"jz",
        "instructions":[
          { "str":"dec     eax" },
          { "str":"jz      short loc_1000269D" }
        ],
        "callees":[]
      },
{
        "tag":"label_223",
        "label":"label_223",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"xor     eax, eax" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000269D",
        "label":"loc_1000269D",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, 404h" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100026A3",
        "label":"loc_100026A3",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, 412h" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100026A9",
        "label":"loc_100026A9",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, 804h" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100026AF",
        "label":"loc_100026AF",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, 411h" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_100026B5",
    "label":"sub_100026B5",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_100026B5",
        "label":"sub_100026B5",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    edi" },
          { "str":"push    40h" },
          { "str":"pop     ecx" },
          { "str":"xor     eax, eax" },
          { "str":"mov     edi, offset unk_10008EE0" },
          { "str":"rep stosd" },
          { "str":"stosb" },
          { "str":"xor     eax, eax" },
          { "str":"mov     edi, offset unk_10008DC0" },
          { "str":"mov     CodePage, eax" },
          { "str":"mov     dword_10008DCC, eax" },
          { "str":"mov     Locale, eax" },
          { "str":"stosd" },
          { "str":"stosd" },
          { "str":"stosd" },
          { "str":"pop     edi" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_100026DE",
    "label":"sub_100026DE",
    "type":"idapro",
    "callees":[
      { "tag":"ds_GetCPInfo" },
      { "tag":"sub_100041E8" },
      { "tag":"sub_10004437" }
    ],
    "blocks":[
      {
        "tag":"sub_100026DE",
        "label":"sub_100026DE",
        "out_true":"loc_10002817",
        "out_false":"label_224",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"sub     esp, 514h" },
          { "str":"lea     eax, [ebp+CPInfo]" },
          { "str":"push    esi" },
          { "str":"push    eax" },
          { "str":"push    CodePage" },
          { "str":"call    ds:GetCPInfo" },
          { "str":"cmp     eax, 1" },
          { "str":"jnz     loc_10002817" }
        ],
        "callees":[
          { "tag":"ds_GetCPInfo" }
        ]
      },
{
        "tag":"label_224",
        "label":"label_224",
        "out_true":"loc_10002708",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     eax, eax" },
          { "str":"mov     esi, 100h" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002708",
        "label":"loc_10002708",
        "out_true":"loc_10002708",
        "out_false":"label_225",
        "last_inst":"jb",
        "instructions":[
          { "str":"mov     [ebp+eax+SrcStr], al" },
          { "str":"inc     eax" },
          { "str":"cmp     eax, esi" },
          { "str":"jb      short loc_10002708" }
        ],
        "callees":[]
      },
{
        "tag":"label_225",
        "label":"label_225",
        "out_true":"loc_10002759",
        "out_false":"label_226",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     al, [ebp+CPInfo.LeadByte]" },
          { "str":"mov     [ebp+SrcStr], 20h" },
          { "str":"test    al, al" },
          { "str":"jz      short loc_10002759" }
        ],
        "callees":[]
      },
{
        "tag":"label_226",
        "label":"label_226",
        "out_true":"loc_10002727",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"push    edi" },
          { "str":"lea     edx, [ebp+CPInfo.LeadByte+1]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002727",
        "label":"loc_10002727",
        "out_true":"loc_1000274E",
        "out_false":"label_227",
        "last_inst":"ja",
        "instructions":[
          { "str":"movzx   ecx, byte ptr [edx]" },
          { "str":"movzx   eax, al" },
          { "str":"cmp     eax, ecx" },
          { "str":"ja      short loc_1000274E" }
        ],
        "callees":[]
      },
{
        "tag":"label_227",
        "label":"label_227",
        "out_true":"loc_1000274E",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"sub     ecx, eax" },
          { "str":"lea     edi, [ebp+eax+SrcStr]" },
          { "str":"inc     ecx" },
          { "str":"mov     eax, 20202020h" },
          { "str":"mov     ebx, ecx" },
          { "str":"shr     ecx, 2" },
          { "str":"rep stosd" },
          { "str":"mov     ecx, ebx" },
          { "str":"and     ecx, 3" },
          { "str":"rep stosb" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000274E",
        "label":"loc_1000274E",
        "out_true":"loc_10002727",
        "out_false":"label_228",
        "last_inst":"jnz",
        "instructions":[
          { "str":"inc     edx" },
          { "str":"inc     edx" },
          { "str":"mov     al, [edx-1]" },
          { "str":"test    al, al" },
          { "str":"jnz     short loc_10002727" }
        ],
        "callees":[]
      },
{
        "tag":"label_228",
        "label":"label_228",
        "out_true":"loc_10002759",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"pop     edi" },
          { "str":"pop     ebx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002759",
        "label":"loc_10002759",
        "out_true":"loc_100027D4",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    0" },
          { "str":"lea     eax, [ebp+CharType]" },
          { "str":"push    Locale" },
          { "str":"push    CodePage" },
          { "str":"push    eax" },
          { "str":"lea     eax, [ebp+SrcStr]" },
          { "str":"push    esi" },
          { "str":"push    eax" },
          { "str":"push    1" },
          { "str":"call    sub_10004437" },
          { "str":"push    0" },
          { "str":"lea     eax, [ebp+DestStr]" },
          { "str":"push    CodePage" },
          { "str":"push    esi" },
          { "str":"push    eax" },
          { "str":"lea     eax, [ebp+SrcStr]" },
          { "str":"push    esi" },
          { "str":"push    eax" },
          { "str":"push    esi" },
          { "str":"push    Locale" },
          { "str":"call    sub_100041E8" },
          { "str":"push    0" },
          { "str":"lea     eax, [ebp+var_314]" },
          { "str":"push    CodePage" },
          { "str":"push    esi" },
          { "str":"push    eax" },
          { "str":"lea     eax, [ebp+SrcStr]" },
          { "str":"push    esi" },
          { "str":"push    eax" },
          { "str":"push    200h" },
          { "str":"push    Locale" },
          { "str":"call    sub_100041E8" },
          { "str":"add     esp, 5Ch" },
          { "str":"xor     eax, eax" },
          { "str":"lea     ecx, [ebp+CharType]" }
        ],
        "callees":[
          { "tag":"sub_100041E8" },
          { "tag":"sub_10004437" }
        ]
      },
{
        "tag":"loc_100027D4",
        "label":"loc_100027D4",
        "out_true":"loc_100027F2",
        "out_false":"label_229",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     dx, [ecx]" },
          { "str":"test    dl, 1" },
          { "str":"jz      short loc_100027F2" }
        ],
        "callees":[]
      },
{
        "tag":"label_229",
        "label":"label_229",
        "out_true":"loc_100027EA",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"or      byte_10008EE1[eax], 10h" },
          { "str":"mov     dl, [ebp+eax+DestStr]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100027EA",
        "label":"loc_100027EA",
        "out_true":"loc_1000280E",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     byte_10008DE0[eax], dl" },
          { "str":"jmp     short loc_1000280E" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100027F2",
        "label":"loc_100027F2",
        "out_true":"loc_10002807",
        "out_false":"label_230",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    dl, 2" },
          { "str":"jz      short loc_10002807" }
        ],
        "callees":[]
      },
{
        "tag":"label_230",
        "label":"label_230",
        "out_true":"loc_100027EA",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"or      byte_10008EE1[eax], 20h" },
          { "str":"mov     dl, [ebp+eax+var_314]" },
          { "str":"jmp     short loc_100027EA" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002807",
        "label":"loc_10002807",
        "out_true":"loc_1000280E",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"and     byte_10008DE0[eax], 0" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000280E",
        "label":"loc_1000280E",
        "out_true":"loc_100027D4",
        "out_false":"label_231",
        "last_inst":"jb",
        "instructions":[
          { "str":"inc     eax" },
          { "str":"inc     ecx" },
          { "str":"inc     ecx" },
          { "str":"cmp     eax, esi" },
          { "str":"jb      short loc_100027D4" }
        ],
        "callees":[]
      },
{
        "tag":"label_231",
        "label":"label_231",
        "out_true":"loc_10002860",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     short loc_10002860" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002817",
        "label":"loc_10002817",
        "out_true":"loc_1000281E",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     eax, eax" },
          { "str":"mov     esi, 100h" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000281E",
        "label":"loc_1000281E",
        "out_true":"loc_1000283C",
        "out_false":"label_232",
        "last_inst":"jb",
        "instructions":[
          { "str":"cmp     eax, 41h" },
          { "str":"jb      short loc_1000283C" }
        ],
        "callees":[]
      },
{
        "tag":"label_232",
        "label":"label_232",
        "out_true":"loc_1000283C",
        "out_false":"label_233",
        "last_inst":"ja",
        "instructions":[
          { "str":"cmp     eax, 5Ah" },
          { "str":"ja      short loc_1000283C" }
        ],
        "callees":[]
      },
{
        "tag":"label_233",
        "label":"label_233",
        "out_true":"loc_10002834",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"or      byte_10008EE1[eax], 10h" },
          { "str":"mov     cl, al" },
          { "str":"add     cl, 20h" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002834",
        "label":"loc_10002834",
        "out_true":"loc_1000285B",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     byte_10008DE0[eax], cl" },
          { "str":"jmp     short loc_1000285B" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000283C",
        "label":"loc_1000283C",
        "out_true":"loc_10002854",
        "out_false":"label_234",
        "last_inst":"jb",
        "instructions":[
          { "str":"cmp     eax, 61h" },
          { "str":"jb      short loc_10002854" }
        ],
        "callees":[]
      },
{
        "tag":"label_234",
        "label":"label_234",
        "out_true":"loc_10002854",
        "out_false":"label_235",
        "last_inst":"ja",
        "instructions":[
          { "str":"cmp     eax, 7Ah" },
          { "str":"ja      short loc_10002854" }
        ],
        "callees":[]
      },
{
        "tag":"label_235",
        "label":"label_235",
        "out_true":"loc_10002834",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"or      byte_10008EE1[eax], 20h" },
          { "str":"mov     cl, al" },
          { "str":"sub     cl, 20h" },
          { "str":"jmp     short loc_10002834" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002854",
        "label":"loc_10002854",
        "out_true":"loc_1000285B",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"and     byte_10008DE0[eax], 0" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000285B",
        "label":"loc_1000285B",
        "out_true":"loc_1000281E",
        "out_false":"loc_10002860",
        "last_inst":"jb",
        "instructions":[
          { "str":"inc     eax" },
          { "str":"cmp     eax, esi" },
          { "str":"jb      short loc_1000281E" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002860",
        "label":"loc_10002860",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     esi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10002863",
    "label":"sub_10002863",
    "type":"idapro",
    "callees":[
      { "tag":"sub_1000248B" }
    ],
    "blocks":[
      {
        "tag":"sub_10002863",
        "label":"sub_10002863",
        "out_true":"locret_1000287E",
        "out_false":"label_236",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     dword_10009108, 0" },
          { "str":"jnz     short locret_1000287E" }
        ],
        "callees":[]
      },
{
        "tag":"label_236",
        "label":"label_236",
        "out_true":"locret_1000287E",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    0FFFFFFFDh" },
          { "str":"call    sub_1000248B" },
          { "str":"pop     ecx" },
          { "str":"mov     dword_10009108, 1" }
        ],
        "callees":[
          { "tag":"sub_1000248B" }
        ]
      },
{
        "tag":"locret_1000287E",
        "label":"locret_1000287E",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10002880",
    "label":"sub_10002880",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_10002880",
        "label":"sub_10002880",
        "out_true":"loc_100028A0",
        "out_false":"label_237",
        "last_inst":"jb",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    edi" },
          { "str":"push    esi" },
          { "str":"mov     esi, [ebp+arg_4]" },
          { "str":"mov     ecx, [ebp+arg_8]" },
          { "str":"mov     edi, [ebp+arg_0]" },
          { "str":"mov     eax, ecx" },
          { "str":"mov     edx, ecx" },
          { "str":"add     eax, esi" },
          { "str":"cmp     edi, esi" },
          { "str":"jbe     short loc_100028A0" }
        ],
        "callees":[]
      },
{
        "tag":"label_237",
        "label":"label_237",
        "out_true":"loc_10002A18",
        "out_false":"loc_100028A0",
        "last_inst":"jb",
        "instructions":[
          { "str":"cmp     edi, eax" },
          { "str":"jb      loc_10002A18" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100028A0",
        "label":"loc_100028A0",
        "out_true":"loc_100028BC",
        "out_false":"label_238",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    edi, 3" },
          { "str":"jnz     short loc_100028BC" }
        ],
        "callees":[]
      },
{
        "tag":"label_238",
        "label":"label_238",
        "out_true":"loc_100028DC",
        "out_false":"label_239",
        "last_inst":"jb",
        "instructions":[
          { "str":"shr     ecx, 2" },
          { "str":"and     edx, 3" },
          { "str":"cmp     ecx, 8" },
          { "str":"jb      short loc_100028DC" }
        ],
        "callees":[]
      },
{
        "tag":"label_239",
        "label":"label_239",
        "out_true":"ds_off_100029C8_edx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"rep movsd" },
          { "str":"jmp     ds:off_100029C8[edx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100028BC",
        "label":"loc_100028BC",
        "out_true":"loc_100028D4",
        "out_false":"label_240",
        "last_inst":"jb",
        "instructions":[
          { "str":"mov     eax, edi" },
          { "str":"mov     edx, 3" },
          { "str":"sub     ecx, 4" },
          { "str":"jb      short loc_100028D4" }
        ],
        "callees":[]
      },
{
        "tag":"label_240",
        "label":"label_240",
        "out_true":"ds_(loc_100028DC_4)_eax_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"and     eax, 3" },
          { "str":"add     ecx, eax" },
          { "str":"jmp     dword ptr ds:(loc_100028DC+4)[eax*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100028D4",
        "label":"loc_100028D4",
        "out_true":"ds_loc_100029D8_ecx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     dword ptr ds:loc_100029D8[ecx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100028DC",
        "label":"loc_100028DC",
        "out_true":"ds_off_1000295C_ecx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     ds:off_1000295C[ecx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100028F0",
        "label":"loc_100028F0",
        "out_true":"loc_100028DC",
        "out_false":"label_241",
        "last_inst":"jb",
        "instructions":[
          { "str":"and     edx, ecx" },
          { "str":"mov     al, [esi]" },
          { "str":"mov     [edi], al" },
          { "str":"mov     al, [esi+1]" },
          { "str":"mov     [edi+1], al" },
          { "str":"mov     al, [esi+2]" },
          { "str":"shr     ecx, 2" },
          { "str":"mov     [edi+2], al" },
          { "str":"add     esi, 3" },
          { "str":"add     edi, 3" },
          { "str":"cmp     ecx, 8" },
          { "str":"jb      short loc_100028DC" }
        ],
        "callees":[]
      },
{
        "tag":"label_241",
        "label":"label_241",
        "out_true":"ds_off_100029C8_edx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"rep movsd" },
          { "str":"jmp     ds:off_100029C8[edx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000291C",
        "label":"loc_1000291C",
        "out_true":"loc_100028DC",
        "out_false":"label_242",
        "last_inst":"jb",
        "instructions":[
          { "str":"and     edx, ecx" },
          { "str":"mov     al, [esi]" },
          { "str":"mov     [edi], al" },
          { "str":"mov     al, [esi+1]" },
          { "str":"shr     ecx, 2" },
          { "str":"mov     [edi+1], al" },
          { "str":"add     esi, 2" },
          { "str":"add     edi, 2" },
          { "str":"cmp     ecx, 8" },
          { "str":"jb      short loc_100028DC" }
        ],
        "callees":[]
      },
{
        "tag":"label_242",
        "label":"label_242",
        "out_true":"ds_off_100029C8_edx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"rep movsd" },
          { "str":"jmp     ds:off_100029C8[edx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002940",
        "label":"loc_10002940",
        "out_true":"loc_100028DC",
        "out_false":"label_243",
        "last_inst":"jb",
        "instructions":[
          { "str":"and     edx, ecx" },
          { "str":"mov     al, [esi]" },
          { "str":"mov     [edi], al" },
          { "str":"inc     esi" },
          { "str":"shr     ecx, 2" },
          { "str":"inc     edi" },
          { "str":"cmp     ecx, 8" },
          { "str":"jb      short loc_100028DC" }
        ],
        "callees":[]
      },
{
        "tag":"label_243",
        "label":"label_243",
        "out_true":"ds_off_100029C8_edx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"rep movsd" },
          { "str":"jmp     ds:off_100029C8[edx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000297C",
        "label":"loc_1000297C",
        "out_true":"loc_10002984",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4-1Ch]" },
          { "str":"mov     [edi+ecx*4-1Ch], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002984",
        "label":"loc_10002984",
        "out_true":"loc_1000298C",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4-18h]" },
          { "str":"mov     [edi+ecx*4-18h], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000298C",
        "label":"loc_1000298C",
        "out_true":"loc_10002994",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4-14h]" },
          { "str":"mov     [edi+ecx*4-14h], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002994",
        "label":"loc_10002994",
        "out_true":"loc_1000299C",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4-10h]" },
          { "str":"mov     [edi+ecx*4-10h], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000299C",
        "label":"loc_1000299C",
        "out_true":"loc_100029A4",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4-0Ch]" },
          { "str":"mov     [edi+ecx*4-0Ch], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100029A4",
        "label":"loc_100029A4",
        "out_true":"loc_100029AC",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4-8]" },
          { "str":"mov     [edi+ecx*4-8], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100029AC",
        "label":"loc_100029AC",
        "out_true":"loc_100029BF",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4-4]" },
          { "str":"mov     [edi+ecx*4-4], eax" },
          { "str":"lea     eax, ds:0[ecx*4]" },
          { "str":"add     esi, eax" },
          { "str":"add     edi, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100029BF",
        "label":"loc_100029BF",
        "out_true":"ds_off_100029C8_edx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     ds:off_100029C8[edx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100029D8",
        "label":"loc_100029D8",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100029E0",
        "label":"loc_100029E0",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     al, [esi]" },
          { "str":"mov     [edi], al" },
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100029EC",
        "label":"loc_100029EC",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     al, [esi]" },
          { "str":"mov     [edi], al" },
          { "str":"mov     al, [esi+1]" },
          { "str":"mov     [edi+1], al" },
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002A00",
        "label":"loc_10002A00",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     al, [esi]" },
          { "str":"mov     [edi], al" },
          { "str":"mov     al, [esi+1]" },
          { "str":"mov     [edi+1], al" },
          { "str":"mov     al, [esi+2]" },
          { "str":"mov     [edi+2], al" },
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002A18",
        "label":"loc_10002A18",
        "out_true":"loc_10002A4C",
        "out_false":"label_244",
        "last_inst":"jnz",
        "instructions":[
          { "str":"lea     esi, [ecx+esi-4]" },
          { "str":"lea     edi, [ecx+edi-4]" },
          { "str":"test    edi, 3" },
          { "str":"jnz     short loc_10002A4C" }
        ],
        "callees":[]
      },
{
        "tag":"label_244",
        "label":"label_244",
        "out_true":"loc_10002A40",
        "out_false":"label_245",
        "last_inst":"jb",
        "instructions":[
          { "str":"shr     ecx, 2" },
          { "str":"and     edx, 3" },
          { "str":"cmp     ecx, 8" },
          { "str":"jb      short loc_10002A40" }
        ],
        "callees":[]
      },
{
        "tag":"label_245",
        "label":"label_245",
        "out_true":"ds_off_10002B60_edx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"std" },
          { "str":"rep movsd" },
          { "str":"cld" },
          { "str":"jmp     ds:off_10002B60[edx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002A40",
        "label":"loc_10002A40",
        "out_true":"ds_off_10002B10_ecx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"neg     ecx" },
          { "str":"jmp     ds:off_10002B10[ecx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002A4C",
        "label":"loc_10002A4C",
        "out_true":"loc_10002A64",
        "out_false":"label_246",
        "last_inst":"jb",
        "instructions":[
          { "str":"mov     eax, edi" },
          { "str":"mov     edx, 3" },
          { "str":"cmp     ecx, 4" },
          { "str":"jb      short loc_10002A64" }
        ],
        "callees":[]
      },
{
        "tag":"label_246",
        "label":"label_246",
        "out_true":"ds_(loc_10002A64_4)_eax_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"and     eax, 3" },
          { "str":"sub     ecx, eax" },
          { "str":"jmp     dword ptr ds:(loc_10002A64+4)[eax*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002A64",
        "label":"loc_10002A64",
        "out_true":"ds_off_10002B60_ecx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     ds:off_10002B60[ecx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002A78",
        "label":"loc_10002A78",
        "out_true":"loc_10002A40",
        "out_false":"label_247",
        "last_inst":"jb",
        "instructions":[
          { "str":"mov     al, [esi+3]" },
          { "str":"and     edx, ecx" },
          { "str":"mov     [edi+3], al" },
          { "str":"dec     esi" },
          { "str":"shr     ecx, 2" },
          { "str":"dec     edi" },
          { "str":"cmp     ecx, 8" },
          { "str":"jb      short loc_10002A40" }
        ],
        "callees":[]
      },
{
        "tag":"label_247",
        "label":"label_247",
        "out_true":"ds_off_10002B60_edx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"std" },
          { "str":"rep movsd" },
          { "str":"cld" },
          { "str":"jmp     ds:off_10002B60[edx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002A98",
        "label":"loc_10002A98",
        "out_true":"loc_10002A40",
        "out_false":"label_248",
        "last_inst":"jb",
        "instructions":[
          { "str":"mov     al, [esi+3]" },
          { "str":"and     edx, ecx" },
          { "str":"mov     [edi+3], al" },
          { "str":"mov     al, [esi+2]" },
          { "str":"shr     ecx, 2" },
          { "str":"mov     [edi+2], al" },
          { "str":"sub     esi, 2" },
          { "str":"sub     edi, 2" },
          { "str":"cmp     ecx, 8" },
          { "str":"jb      short loc_10002A40" }
        ],
        "callees":[]
      },
{
        "tag":"label_248",
        "label":"label_248",
        "out_true":"ds_off_10002B60_edx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"std" },
          { "str":"rep movsd" },
          { "str":"cld" },
          { "str":"jmp     ds:off_10002B60[edx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002AC0",
        "label":"loc_10002AC0",
        "out_true":"loc_10002A40",
        "out_false":"label_249",
        "last_inst":"jb",
        "instructions":[
          { "str":"mov     al, [esi+3]" },
          { "str":"and     edx, ecx" },
          { "str":"mov     [edi+3], al" },
          { "str":"mov     al, [esi+2]" },
          { "str":"mov     [edi+2], al" },
          { "str":"mov     al, [esi+1]" },
          { "str":"shr     ecx, 2" },
          { "str":"mov     [edi+1], al" },
          { "str":"sub     esi, 3" },
          { "str":"sub     edi, 3" },
          { "str":"cmp     ecx, 8" },
          { "str":"jb      loc_10002A40" }
        ],
        "callees":[]
      },
{
        "tag":"label_249",
        "label":"label_249",
        "out_true":"ds_off_10002B60_edx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"std" },
          { "str":"rep movsd" },
          { "str":"cld" },
          { "str":"jmp     ds:off_10002B60[edx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002B14",
        "label":"loc_10002B14",
        "out_true":"loc_10002B1C",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4+1Ch]" },
          { "str":"mov     [edi+ecx*4+1Ch], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002B1C",
        "label":"loc_10002B1C",
        "out_true":"loc_10002B24",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4+18h]" },
          { "str":"mov     [edi+ecx*4+18h], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002B24",
        "label":"loc_10002B24",
        "out_true":"loc_10002B2C",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4+14h]" },
          { "str":"mov     [edi+ecx*4+14h], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002B2C",
        "label":"loc_10002B2C",
        "out_true":"loc_10002B34",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4+10h]" },
          { "str":"mov     [edi+ecx*4+10h], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002B34",
        "label":"loc_10002B34",
        "out_true":"loc_10002B3C",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4+0Ch]" },
          { "str":"mov     [edi+ecx*4+0Ch], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002B3C",
        "label":"loc_10002B3C",
        "out_true":"loc_10002B44",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4+8]" },
          { "str":"mov     [edi+ecx*4+8], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002B44",
        "label":"loc_10002B44",
        "out_true":"loc_10002B57",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4+4]" },
          { "str":"mov     [edi+ecx*4+4], eax" },
          { "str":"lea     eax, ds:0[ecx*4]" },
          { "str":"add     esi, eax" },
          { "str":"add     edi, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002B57",
        "label":"loc_10002B57",
        "out_true":"ds_off_10002B60_edx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     ds:off_10002B60[edx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002B70",
        "label":"loc_10002B70",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002B78",
        "label":"loc_10002B78",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     al, [esi+3]" },
          { "str":"mov     [edi+3], al" },
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002B88",
        "label":"loc_10002B88",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     al, [esi+3]" },
          { "str":"mov     [edi+3], al" },
          { "str":"mov     al, [esi+2]" },
          { "str":"mov     [edi+2], al" },
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002B9C",
        "label":"loc_10002B9C",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     al, [esi+3]" },
          { "str":"mov     [edi+3], al" },
          { "str":"mov     al, [esi+2]" },
          { "str":"mov     [edi+2], al" },
          { "str":"mov     al, [esi+1]" },
          { "str":"mov     [edi+1], al" },
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10002BB5",
    "label":"sub_10002BB5",
    "type":"idapro",
    "callees":[
      { "tag":"sub_10002BCC" }
    ],
    "blocks":[
      {
        "tag":"sub_10002BB5",
        "label":"sub_10002BB5",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    0" },
          { "str":"push    [esp+4+arg_8]" },
          { "str":"push    [esp+8+arg_4]" },
          { "str":"push    [esp+0Ch+arg_0]" },
          { "str":"call    sub_10002BCC" },
          { "str":"add     esp, 10h" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"sub_10002BCC" }
        ]
      }
    ]
  },{
    "tag":"sub_10002BCC",
    "label":"sub_10002BCC",
    "type":"idapro",
    "callees":[
      { "tag":"sub_10004580" },
      { "tag":"sub_10004589" },
      { "tag":"sub_100046C4" }
    ],
    "blocks":[
      {
        "tag":"sub_10002BCC",
        "label":"sub_10002BCC",
        "out_true":"loc_10002BE4",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"sub     esp, 0Ch" },
          { "str":"push    ebx" },
          { "str":"and     [ebp+var_8], 0" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"mov     edi, [ebp+arg_0]" },
          { "str":"mov     bl, [edi]" },
          { "str":"lea     esi, [edi+1]" },
          { "str":"mov     [ebp+var_4], esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002BE4",
        "label":"loc_10002BE4",
        "out_true":"loc_10002BFC",
        "out_false":"label_250",
        "last_inst":"jl",
        "instructions":[
          { "str":"cmp     dword_100086F4, 1" },
          { "str":"jle     short loc_10002BFC" }
        ],
        "callees":[]
      },
{
        "tag":"label_250",
        "label":"label_250",
        "out_true":"loc_10002C0B",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"movzx   eax, bl" },
          { "str":"push    8" },
          { "str":"push    eax" },
          { "str":"call    sub_100046C4" },
          { "str":"pop     ecx" },
          { "str":"pop     ecx" },
          { "str":"jmp     short loc_10002C0B" }
        ],
        "callees":[
          { "tag":"sub_100046C4" }
        ]
      },
{
        "tag":"loc_10002BFC",
        "label":"loc_10002BFC",
        "out_true":"loc_10002C0B",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ecx, off_100084E8" },
          { "str":"movzx   eax, bl" },
          { "str":"mov     al, [ecx+eax*2]" },
          { "str":"and     eax, 8" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002C0B",
        "label":"loc_10002C0B",
        "out_true":"loc_10002C14",
        "out_false":"label_251",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10002C14" }
        ],
        "callees":[]
      },
{
        "tag":"label_251",
        "label":"label_251",
        "out_true":"loc_10002BE4",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     bl, [esi]" },
          { "str":"inc     esi" },
          { "str":"jmp     short loc_10002BE4" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002C14",
        "label":"loc_10002C14",
        "out_true":"loc_10002C22",
        "out_false":"label_252",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     bl, 2Dh" },
          { "str":"mov     [ebp+var_4], esi" },
          { "str":"jnz     short loc_10002C22" }
        ],
        "callees":[]
      },
{
        "tag":"label_252",
        "label":"label_252",
        "out_true":"loc_10002C27",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"or      [ebp+arg_C], 2" },
          { "str":"jmp     short loc_10002C27" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002C22",
        "label":"loc_10002C22",
        "out_true":"loc_10002C2D",
        "out_false":"loc_10002C27",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     bl, 2Bh" },
          { "str":"jnz     short loc_10002C2D" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002C27",
        "label":"loc_10002C27",
        "out_true":"loc_10002C2D",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     bl, [esi]" },
          { "str":"inc     esi" },
          { "str":"mov     [ebp+var_4], esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002C2D",
        "label":"loc_10002C2D",
        "out_true":"loc_10002DC1",
        "out_false":"label_253",
        "last_inst":"jl",
        "instructions":[
          { "str":"mov     eax, [ebp+arg_8]" },
          { "str":"test    eax, eax" },
          { "str":"jl      loc_10002DC1" }
        ],
        "callees":[]
      },
{
        "tag":"label_253",
        "label":"label_253",
        "out_true":"loc_10002DC1",
        "out_false":"label_254",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     eax, 1" },
          { "str":"jz      loc_10002DC1" }
        ],
        "callees":[]
      },
{
        "tag":"label_254",
        "label":"label_254",
        "out_true":"loc_10002DC1",
        "out_false":"label_255",
        "last_inst":"jg",
        "instructions":[
          { "str":"cmp     eax, 24h" },
          { "str":"jg      loc_10002DC1" }
        ],
        "callees":[]
      },
{
        "tag":"label_255",
        "label":"label_255",
        "out_true":"loc_10002C75",
        "out_false":"label_256",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    10h" },
          { "str":"test    eax, eax" },
          { "str":"pop     ecx" },
          { "str":"jnz     short loc_10002C75" }
        ],
        "callees":[]
      },
{
        "tag":"label_256",
        "label":"label_256",
        "out_true":"loc_10002C5F",
        "out_false":"label_257",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     bl, 30h" },
          { "str":"jz      short loc_10002C5F" }
        ],
        "callees":[]
      },
{
        "tag":"label_257",
        "label":"label_257",
        "out_true":"loc_10002C91",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     [ebp+arg_8], 0Ah" },
          { "str":"jmp     short loc_10002C91" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002C5F",
        "label":"loc_10002C5F",
        "out_true":"loc_10002C72",
        "out_false":"label_258",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     al, [esi]" },
          { "str":"cmp     al, 78h" },
          { "str":"jz      short loc_10002C72" }
        ],
        "callees":[]
      },
{
        "tag":"label_258",
        "label":"label_258",
        "out_true":"loc_10002C72",
        "out_false":"label_259",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     al, 58h" },
          { "str":"jz      short loc_10002C72" }
        ],
        "callees":[]
      },
{
        "tag":"label_259",
        "label":"label_259",
        "out_true":"loc_10002C91",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     [ebp+arg_8], 8" },
          { "str":"jmp     short loc_10002C91" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002C72",
        "label":"loc_10002C72",
        "out_true":"loc_10002C75",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     [ebp+arg_8], ecx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002C75",
        "label":"loc_10002C75",
        "out_true":"loc_10002C91",
        "out_false":"label_260",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     [ebp+arg_8], ecx" },
          { "str":"jnz     short loc_10002C91" }
        ],
        "callees":[]
      },
{
        "tag":"label_260",
        "label":"label_260",
        "out_true":"loc_10002C91",
        "out_false":"label_261",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     bl, 30h" },
          { "str":"jnz     short loc_10002C91" }
        ],
        "callees":[]
      },
{
        "tag":"label_261",
        "label":"label_261",
        "out_true":"loc_10002C89",
        "out_false":"label_262",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     al, [esi]" },
          { "str":"cmp     al, 78h" },
          { "str":"jz      short loc_10002C89" }
        ],
        "callees":[]
      },
{
        "tag":"label_262",
        "label":"label_262",
        "out_true":"loc_10002C91",
        "out_false":"loc_10002C89",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     al, 58h" },
          { "str":"jnz     short loc_10002C91" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002C89",
        "label":"loc_10002C89",
        "out_true":"loc_10002C91",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     bl, [esi+1]" },
          { "str":"inc     esi" },
          { "str":"inc     esi" },
          { "str":"mov     [ebp+var_4], esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002C91",
        "label":"loc_10002C91",
        "out_true":"loc_10002CA1",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"or      eax, 0FFFFFFFFh" },
          { "str":"xor     edx, edx" },
          { "str":"div     [ebp+arg_8]" },
          { "str":"mov     edi, 103h" },
          { "str":"mov     [ebp+var_C], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002CA1",
        "label":"loc_10002CA1",
        "out_true":"loc_10002CB9",
        "out_false":"label_263",
        "last_inst":"jl",
        "instructions":[
          { "str":"cmp     dword_100086F4, 1" },
          { "str":"movzx   esi, bl" },
          { "str":"jle     short loc_10002CB9" }
        ],
        "callees":[]
      },
{
        "tag":"label_263",
        "label":"label_263",
        "out_true":"loc_10002CC4",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    4" },
          { "str":"push    esi" },
          { "str":"call    sub_100046C4" },
          { "str":"pop     ecx" },
          { "str":"pop     ecx" },
          { "str":"jmp     short loc_10002CC4" }
        ],
        "callees":[
          { "tag":"sub_100046C4" }
        ]
      },
{
        "tag":"loc_10002CB9",
        "label":"loc_10002CB9",
        "out_true":"loc_10002CC4",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, off_100084E8" },
          { "str":"mov     al, [eax+esi*2]" },
          { "str":"and     eax, 4" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002CC4",
        "label":"loc_10002CC4",
        "out_true":"loc_10002CD0",
        "out_false":"label_264",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10002CD0" }
        ],
        "callees":[]
      },
{
        "tag":"label_264",
        "label":"label_264",
        "out_true":"loc_10002D02",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"movsx   ecx, bl" },
          { "str":"sub     ecx, 30h" },
          { "str":"jmp     short loc_10002D02" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002CD0",
        "label":"loc_10002CD0",
        "out_true":"loc_10002CE4",
        "out_false":"label_265",
        "last_inst":"jl",
        "instructions":[
          { "str":"cmp     dword_100086F4, 1" },
          { "str":"jle     short loc_10002CE4" }
        ],
        "callees":[]
      },
{
        "tag":"label_265",
        "label":"label_265",
        "out_true":"loc_10002CEF",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    edi" },
          { "str":"push    esi" },
          { "str":"call    sub_100046C4" },
          { "str":"pop     ecx" },
          { "str":"pop     ecx" },
          { "str":"jmp     short loc_10002CEF" }
        ],
        "callees":[
          { "tag":"sub_100046C4" }
        ]
      },
{
        "tag":"loc_10002CE4",
        "label":"loc_10002CE4",
        "out_true":"loc_10002CEF",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, off_100084E8" },
          { "str":"mov     ax, [eax+esi*2]" },
          { "str":"and     eax, edi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002CEF",
        "label":"loc_10002CEF",
        "out_true":"loc_10002D3D",
        "out_false":"label_266",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10002D3D" }
        ],
        "callees":[]
      },
{
        "tag":"label_266",
        "label":"label_266",
        "out_true":"loc_10002D02",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"movsx   eax, bl" },
          { "str":"push    eax" },
          { "str":"call    sub_10004589" },
          { "str":"pop     ecx" },
          { "str":"mov     ecx, eax" },
          { "str":"sub     ecx, 37h" }
        ],
        "callees":[
          { "tag":"sub_10004589" }
        ]
      },
{
        "tag":"loc_10002D02",
        "label":"loc_10002D02",
        "out_true":"loc_10002D3D",
        "out_false":"label_267",
        "last_inst":"jnb",
        "instructions":[
          { "str":"cmp     ecx, [ebp+arg_8]" },
          { "str":"jnb     short loc_10002D3D" }
        ],
        "callees":[]
      },
{
        "tag":"label_267",
        "label":"label_267",
        "out_true":"loc_10002D27",
        "out_false":"label_268",
        "last_inst":"jb",
        "instructions":[
          { "str":"mov     esi, [ebp+var_8]" },
          { "str":"or      [ebp+arg_C], 8" },
          { "str":"cmp     esi, [ebp+var_C]" },
          { "str":"jb      short loc_10002D27" }
        ],
        "callees":[]
      },
{
        "tag":"label_268",
        "label":"label_268",
        "out_true":"loc_10002D21",
        "out_false":"label_269",
        "last_inst":"jnz",
        "instructions":[
          { "str":"jnz     short loc_10002D21" }
        ],
        "callees":[]
      },
{
        "tag":"label_269",
        "label":"label_269",
        "out_true":"loc_10002D27",
        "out_false":"loc_10002D21",
        "last_inst":"jb",
        "instructions":[
          { "str":"or      eax, 0FFFFFFFFh" },
          { "str":"xor     edx, edx" },
          { "str":"div     [ebp+arg_8]" },
          { "str":"cmp     ecx, edx" },
          { "str":"jbe     short loc_10002D27" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002D21",
        "label":"loc_10002D21",
        "out_true":"loc_10002D30",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"or      [ebp+arg_C], 4" },
          { "str":"jmp     short loc_10002D30" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002D27",
        "label":"loc_10002D27",
        "out_true":"loc_10002D30",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"imul    esi, [ebp+arg_8]" },
          { "str":"add     esi, ecx" },
          { "str":"mov     [ebp+var_8], esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002D30",
        "label":"loc_10002D30",
        "out_true":"loc_10002CA1",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     eax, [ebp+var_4]" },
          { "str":"inc     [ebp+var_4]" },
          { "str":"mov     bl, [eax]" },
          { "str":"jmp     loc_10002CA1" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002D3D",
        "label":"loc_10002D3D",
        "out_true":"loc_10002D5A",
        "out_false":"label_270",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     eax, [ebp+arg_C]" },
          { "str":"dec     [ebp+var_4]" },
          { "str":"mov     ebx, [ebp+arg_4]" },
          { "str":"test    al, 8" },
          { "str":"jnz     short loc_10002D5A" }
        ],
        "callees":[]
      },
{
        "tag":"label_270",
        "label":"label_270",
        "out_true":"loc_10002D54",
        "out_false":"label_271",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    ebx, ebx" },
          { "str":"jz      short loc_10002D54" }
        ],
        "callees":[]
      },
{
        "tag":"label_271",
        "label":"label_271",
        "out_true":"loc_10002D54",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"mov     [ebp+var_4], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002D54",
        "label":"loc_10002D54",
        "out_true":"loc_10002DA5",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"and     [ebp+var_8], 0" },
          { "str":"jmp     short loc_10002DA5" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002D5A",
        "label":"loc_10002D5A",
        "out_true":"loc_10002D7E",
        "out_false":"label_272",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    al, 4" },
          { "str":"mov     esi, 7FFFFFFFh" },
          { "str":"jnz     short loc_10002D7E" }
        ],
        "callees":[]
      },
{
        "tag":"label_272",
        "label":"label_272",
        "out_true":"loc_10002DA5",
        "out_false":"label_273",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    al, 1" },
          { "str":"jnz     short loc_10002DA5" }
        ],
        "callees":[]
      },
{
        "tag":"label_273",
        "label":"label_273",
        "out_true":"loc_10002D75",
        "out_false":"label_274",
        "last_inst":"jz",
        "instructions":[
          { "str":"and     eax, 2" },
          { "str":"jz      short loc_10002D75" }
        ],
        "callees":[]
      },
{
        "tag":"label_274",
        "label":"label_274",
        "out_true":"loc_10002D7E",
        "out_false":"loc_10002D75",
        "last_inst":"ja",
        "instructions":[
          { "str":"cmp     [ebp+var_8], 80000000h" },
          { "str":"ja      short loc_10002D7E" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002D75",
        "label":"loc_10002D75",
        "out_true":"loc_10002DA5",
        "out_false":"label_275",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    eax, eax" },
          { "str":"jnz     short loc_10002DA5" }
        ],
        "callees":[]
      },
{
        "tag":"label_275",
        "label":"label_275",
        "out_true":"loc_10002DA5",
        "out_false":"loc_10002D7E",
        "last_inst":"jb",
        "instructions":[
          { "str":"cmp     [ebp+var_8], esi" },
          { "str":"jbe     short loc_10002DA5" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002D7E",
        "label":"loc_10002D7E",
        "out_true":"loc_10002D95",
        "out_false":"label_276",
        "last_inst":"jz",
        "instructions":[
          { "str":"call    sub_10004580" },
          { "str":"test    byte ptr [ebp+arg_C], 1" },
          { "str":"mov     dword ptr [eax], 22h" },
          { "str":"jz      short loc_10002D95" }
        ],
        "callees":[
          { "tag":"sub_10004580" }
        ]
      },
{
        "tag":"label_276",
        "label":"label_276",
        "out_true":"loc_10002DA5",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"or      [ebp+var_8], 0FFFFFFFFh" },
          { "str":"jmp     short loc_10002DA5" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002D95",
        "label":"loc_10002D95",
        "out_true":"loc_10002DA5",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [ebp+arg_C]" },
          { "str":"and     al, 2" },
          { "str":"neg     al" },
          { "str":"sbb     eax, eax" },
          { "str":"neg     eax" },
          { "str":"add     eax, esi" },
          { "str":"mov     [ebp+var_8], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002DA5",
        "label":"loc_10002DA5",
        "out_true":"loc_10002DAE",
        "out_false":"label_277",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    ebx, ebx" },
          { "str":"jz      short loc_10002DAE" }
        ],
        "callees":[]
      },
{
        "tag":"label_277",
        "label":"label_277",
        "out_true":"loc_10002DAE",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [ebp+var_4]" },
          { "str":"mov     [ebx], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002DAE",
        "label":"loc_10002DAE",
        "out_true":"loc_10002DBC",
        "out_false":"label_278",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    byte ptr [ebp+arg_C], 2" },
          { "str":"jz      short loc_10002DBC" }
        ],
        "callees":[]
      },
{
        "tag":"label_278",
        "label":"label_278",
        "out_true":"loc_10002DBC",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [ebp+var_8]" },
          { "str":"neg     eax" },
          { "str":"mov     [ebp+var_8], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002DBC",
        "label":"loc_10002DBC",
        "out_true":"loc_10002DCC",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     eax, [ebp+var_8]" },
          { "str":"jmp     short loc_10002DCC" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002DC1",
        "label":"loc_10002DC1",
        "out_true":"loc_10002DCA",
        "out_false":"label_279",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [ebp+arg_4]" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10002DCA" }
        ],
        "callees":[]
      },
{
        "tag":"label_279",
        "label":"label_279",
        "out_true":"loc_10002DCA",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     [eax], edi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002DCA",
        "label":"loc_10002DCA",
        "out_true":"loc_10002DCC",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     eax, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002DCC",
        "label":"loc_10002DCC",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"rtn_4",
    "label":"rtn_4",
    "type":"ours",
    "callees":[],
    "blocks":[
      {
        "tag":"loc_10002DE0",
        "label":"loc_10002DE0",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"lea     eax, [edx-1]" },
          { "str":"pop     ebx" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10002DF0",
    "label":"sub_10002DF0",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_10002DF0",
        "label":"sub_10002DF0",
        "out_true":"loc_10002DF6",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     eax, eax" },
          { "str":"mov     al, [esp+arg_4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002DF6",
        "label":"loc_10002DF6",
        "out_true":"loc_10002E1B",
        "out_false":"loc_10002E08",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"mov     ebx, eax" },
          { "str":"shl     eax, 8" },
          { "str":"mov     edx, [esp+4+arg_0]" },
          { "str":"test    edx, 3" },
          { "str":"jz      short loc_10002E1B" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002E08",
        "label":"loc_10002E08",
        "out_true":"loc_10002DE0",
        "out_false":"label_280",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     cl, [edx]" },
          { "str":"inc     edx" },
          { "str":"cmp     cl, bl" },
          { "str":"jz      short loc_10002DE0" }
        ],
        "callees":[]
      },
{
        "tag":"label_280",
        "label":"label_280",
        "out_true":"loc_10002E64",
        "out_false":"label_281",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    cl, cl" },
          { "str":"jz      short loc_10002E64" }
        ],
        "callees":[]
      },
{
        "tag":"label_281",
        "label":"label_281",
        "out_true":"loc_10002E08",
        "out_false":"loc_10002E1B",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    edx, 3" },
          { "str":"jnz     short loc_10002E08" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002E1B",
        "label":"loc_10002E1B",
        "out_true":"loc_10002E26",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"or      ebx, eax" },
          { "str":"push    edi" },
          { "str":"mov     eax, ebx" },
          { "str":"shl     ebx, 10h" },
          { "str":"push    esi" },
          { "str":"or      ebx, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002E26",
        "label":"loc_10002E26",
        "out_true":"loc_10002E68",
        "out_false":"label_282",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ecx, [edx]" },
          { "str":"mov     edi, 7EFEFEFFh" },
          { "str":"mov     eax, ecx" },
          { "str":"mov     esi, edi" },
          { "str":"xor     ecx, ebx" },
          { "str":"add     esi, eax" },
          { "str":"add     edi, ecx" },
          { "str":"xor     ecx, 0FFFFFFFFh" },
          { "str":"xor     eax, 0FFFFFFFFh" },
          { "str":"xor     ecx, edi" },
          { "str":"xor     eax, esi" },
          { "str":"add     edx, 4" },
          { "str":"and     ecx, 81010100h" },
          { "str":"jnz     short loc_10002E68" }
        ],
        "callees":[]
      },
{
        "tag":"label_282",
        "label":"label_282",
        "out_true":"loc_10002E26",
        "out_false":"label_283",
        "last_inst":"jz",
        "instructions":[
          { "str":"and     eax, 81010100h" },
          { "str":"jz      short loc_10002E26" }
        ],
        "callees":[]
      },
{
        "tag":"label_283",
        "label":"label_283",
        "out_true":"loc_10002E62",
        "out_false":"label_284",
        "last_inst":"jnz",
        "instructions":[
          { "str":"and     eax, 1010100h" },
          { "str":"jnz     short loc_10002E62" }
        ],
        "callees":[]
      },
{
        "tag":"label_284",
        "label":"label_284",
        "out_true":"loc_10002E26",
        "out_false":"loc_10002E62",
        "last_inst":"jnz",
        "instructions":[
          { "str":"and     esi, 80000000h" },
          { "str":"jnz     short loc_10002E26" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002E62",
        "label":"loc_10002E62",
        "out_true":"loc_10002E64",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"pop     esi" },
          { "str":"pop     edi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002E64",
        "label":"loc_10002E64",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     ebx" },
          { "str":"xor     eax, eax" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002E68",
        "label":"loc_10002E68",
        "out_true":"loc_10002EA5",
        "out_false":"label_285",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [edx-4]" },
          { "str":"cmp     al, bl" },
          { "str":"jz      short loc_10002EA5" }
        ],
        "callees":[]
      },
{
        "tag":"label_285",
        "label":"label_285",
        "out_true":"loc_10002E62",
        "out_false":"label_286",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    al, al" },
          { "str":"jz      short loc_10002E62" }
        ],
        "callees":[]
      },
{
        "tag":"label_286",
        "label":"label_286",
        "out_true":"loc_10002E9E",
        "out_false":"label_287",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     ah, bl" },
          { "str":"jz      short loc_10002E9E" }
        ],
        "callees":[]
      },
{
        "tag":"label_287",
        "label":"label_287",
        "out_true":"loc_10002E62",
        "out_false":"label_288",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    ah, ah" },
          { "str":"jz      short loc_10002E62" }
        ],
        "callees":[]
      },
{
        "tag":"label_288",
        "label":"label_288",
        "out_true":"loc_10002E97",
        "out_false":"label_289",
        "last_inst":"jz",
        "instructions":[
          { "str":"shr     eax, 10h" },
          { "str":"cmp     al, bl" },
          { "str":"jz      short loc_10002E97" }
        ],
        "callees":[]
      },
{
        "tag":"label_289",
        "label":"label_289",
        "out_true":"loc_10002E62",
        "out_false":"label_290",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    al, al" },
          { "str":"jz      short loc_10002E62" }
        ],
        "callees":[]
      },
{
        "tag":"label_290",
        "label":"label_290",
        "out_true":"loc_10002E90",
        "out_false":"label_291",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     ah, bl" },
          { "str":"jz      short loc_10002E90" }
        ],
        "callees":[]
      },
{
        "tag":"label_291",
        "label":"label_291",
        "out_true":"loc_10002E62",
        "out_false":"label_292",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    ah, ah" },
          { "str":"jz      short loc_10002E62" }
        ],
        "callees":[]
      },
{
        "tag":"label_292",
        "label":"label_292",
        "out_true":"loc_10002E26",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     short loc_10002E26" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002E90",
        "label":"loc_10002E90",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"lea     eax, [edx-1]" },
          { "str":"pop     ebx" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002E97",
        "label":"loc_10002E97",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"lea     eax, [edx-2]" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"pop     ebx" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002E9E",
        "label":"loc_10002E9E",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"lea     eax, [edx-3]" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"pop     ebx" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002EA5",
        "label":"loc_10002EA5",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"lea     eax, [edx-4]" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"pop     ebx" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10002EB0",
    "label":"sub_10002EB0",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_10002EB0",
        "label":"sub_10002EB0",
        "out_true":"loc_10002F2A",
        "out_false":"label_293",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     ecx, [esp+arg_4]" },
          { "str":"push    edi" },
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"mov     dl, [ecx]" },
          { "str":"mov     edi, [esp+0Ch+arg_0]" },
          { "str":"test    dl, dl" },
          { "str":"jz      short loc_10002F2A" }
        ],
        "callees":[]
      },
{
        "tag":"label_293",
        "label":"label_293",
        "out_true":"loc_10002F17",
        "out_false":"loc_10002EC8",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     dh, [ecx+1]" },
          { "str":"test    dh, dh" },
          { "str":"jz      short loc_10002F17" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002EC8",
        "label":"loc_10002EC8",
        "out_true":"loc_10002EEA",
        "out_false":"label_294",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     esi, edi" },
          { "str":"mov     ecx, [esp+0Ch+arg_4]" },
          { "str":"mov     al, [edi]" },
          { "str":"inc     esi" },
          { "str":"cmp     al, dl" },
          { "str":"jz      short loc_10002EEA" }
        ],
        "callees":[]
      },
{
        "tag":"label_294",
        "label":"label_294",
        "out_true":"loc_10002EE4",
        "out_false":"loc_10002ED9",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    al, al" },
          { "str":"jz      short loc_10002EE4" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002ED9",
        "label":"loc_10002ED9",
        "out_true":"loc_10002EDC",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     al, [esi]" },
          { "str":"inc     esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002EDC",
        "label":"loc_10002EDC",
        "out_true":"loc_10002EEA",
        "out_false":"label_295",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     al, dl" },
          { "str":"jz      short loc_10002EEA" }
        ],
        "callees":[]
      },
{
        "tag":"label_295",
        "label":"label_295",
        "out_true":"loc_10002ED9",
        "out_false":"loc_10002EE4",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    al, al" },
          { "str":"jnz     short loc_10002ED9" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002EE4",
        "label":"loc_10002EE4",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"pop     edi" },
          { "str":"xor     eax, eax" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002EEA",
        "label":"loc_10002EEA",
        "out_true":"loc_10002EDC",
        "out_false":"label_296",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     al, [esi]" },
          { "str":"inc     esi" },
          { "str":"cmp     al, dh" },
          { "str":"jnz     short loc_10002EDC" }
        ],
        "callees":[]
      },
{
        "tag":"label_296",
        "label":"label_296",
        "out_true":"loc_10002EF4",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"lea     edi, [esi-1]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002EF4",
        "label":"loc_10002EF4",
        "out_true":"loc_10002F23",
        "out_false":"label_297",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     ah, [ecx+2]" },
          { "str":"test    ah, ah" },
          { "str":"jz      short loc_10002F23" }
        ],
        "callees":[]
      },
{
        "tag":"label_297",
        "label":"label_297",
        "out_true":"loc_10002EC8",
        "out_false":"label_298",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     al, [esi]" },
          { "str":"add     esi, 2" },
          { "str":"cmp     al, ah" },
          { "str":"jnz     short loc_10002EC8" }
        ],
        "callees":[]
      },
{
        "tag":"label_298",
        "label":"label_298",
        "out_true":"loc_10002F23",
        "out_false":"label_299",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     al, [ecx+3]" },
          { "str":"test    al, al" },
          { "str":"jz      short loc_10002F23" }
        ],
        "callees":[]
      },
{
        "tag":"label_299",
        "label":"label_299",
        "out_true":"loc_10002EF4",
        "out_false":"label_300",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     ah, [esi-1]" },
          { "str":"add     ecx, 2" },
          { "str":"cmp     al, ah" },
          { "str":"jz      short loc_10002EF4" }
        ],
        "callees":[]
      },
{
        "tag":"label_300",
        "label":"label_300",
        "out_true":"loc_10002EC8",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     short loc_10002EC8" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002F17",
        "label":"loc_10002F17",
        "out_true":"loc_10002DF6",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"xor     eax, eax" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"pop     edi" },
          { "str":"mov     al, dl" },
          { "str":"jmp     loc_10002DF6" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002F23",
        "label":"loc_10002F23",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"lea     eax, [edi-1]" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"pop     edi" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002F2A",
        "label":"loc_10002F2A",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"pop     edi" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10002F30",
    "label":"sub_10002F30",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_10002F30",
        "label":"sub_10002F30",
        "out_true":"loc_10002F61",
        "out_false":"label_301",
        "last_inst":"jecxz",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    edi" },
          { "str":"push    esi" },
          { "str":"push    ebx" },
          { "str":"mov     ecx, [ebp+arg_8]" },
          { "str":"jecxz   short loc_10002F61" }
        ],
        "callees":[]
      },
{
        "tag":"label_301",
        "label":"label_301",
        "out_true":"loc_10002F5F",
        "out_false":"label_302",
        "last_inst":"ja",
        "instructions":[
          { "str":"mov     ebx, ecx" },
          { "str":"mov     edi, [ebp+arg_0]" },
          { "str":"mov     esi, edi" },
          { "str":"xor     eax, eax" },
          { "str":"repne scasb" },
          { "str":"neg     ecx" },
          { "str":"add     ecx, ebx" },
          { "str":"mov     edi, esi" },
          { "str":"mov     esi, [ebp+arg_4]" },
          { "str":"repe cmpsb" },
          { "str":"mov     al, [esi-1]" },
          { "str":"xor     ecx, ecx" },
          { "str":"cmp     al, [edi-1]" },
          { "str":"ja      short loc_10002F5F" }
        ],
        "callees":[]
      },
{
        "tag":"label_302",
        "label":"label_302",
        "out_true":"loc_10002F61",
        "out_false":"label_303",
        "last_inst":"jz",
        "instructions":[
          { "str":"jz      short loc_10002F61" }
        ],
        "callees":[]
      },
{
        "tag":"label_303",
        "label":"label_303",
        "out_true":"loc_10002F5F",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"dec     ecx" },
          { "str":"dec     ecx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002F5F",
        "label":"loc_10002F5F",
        "out_true":"loc_10002F61",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"not     ecx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002F61",
        "label":"loc_10002F61",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, ecx" },
          { "str":"pop     ebx" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10002F9F",
    "label":"sub_10002F9F",
    "type":"idapro",
    "callees":[
      { "tag":"ds_HeapAlloc" }
    ],
    "blocks":[
      {
        "tag":"sub_10002F9F",
        "label":"sub_10002F9F",
        "out_true":"loc_10002FBC",
        "out_false":"label_304",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    140h" },
          { "str":"push    0" },
          { "str":"push    hHeap" },
          { "str":"call    ds:HeapAlloc" },
          { "str":"test    eax, eax" },
          { "str":"mov     lpMem, eax" },
          { "str":"jnz     short loc_10002FBC" }
        ],
        "callees":[
          { "tag":"ds_HeapAlloc" }
        ]
      },
{
        "tag":"label_304",
        "label":"label_304",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002FBC",
        "label":"loc_10002FBC",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     ecx, [esp+arg_0]" },
          { "str":"and     dword_10008DA4, 0" },
          { "str":"and     dword_10008DA8, 0" },
          { "str":"push    1" },
          { "str":"mov     dword_10008DA0, eax" },
          { "str":"mov     dword_10008DB0, ecx" },
          { "str":"mov     dword_10008D98, 10h" },
          { "str":"pop     eax" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10002FE7",
    "label":"sub_10002FE7",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_10002FE7",
        "label":"sub_10002FE7",
        "out_true":"loc_10002FF7",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, dword_10008DA8" },
          { "str":"lea     ecx, [eax+eax*4]" },
          { "str":"mov     eax, lpMem" },
          { "str":"lea     ecx, [eax+ecx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10002FF7",
        "label":"loc_10002FF7",
        "out_true":"loc_1000300F",
        "out_false":"label_305",
        "last_inst":"jnb",
        "instructions":[
          { "str":"cmp     eax, ecx" },
          { "str":"jnb     short loc_1000300F" }
        ],
        "callees":[]
      },
{
        "tag":"label_305",
        "label":"label_305",
        "out_true":"locret_10003011",
        "out_false":"label_306",
        "last_inst":"jb",
        "instructions":[
          { "str":"mov     edx, [esp+arg_0]" },
          { "str":"sub     edx, [eax+0Ch]" },
          { "str":"cmp     edx, 100000h" },
          { "str":"jb      short locret_10003011" }
        ],
        "callees":[]
      },
{
        "tag":"label_306",
        "label":"label_306",
        "out_true":"loc_10002FF7",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"add     eax, 14h" },
          { "str":"jmp     short loc_10002FF7" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000300F",
        "label":"loc_1000300F",
        "out_true":"locret_10003011",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     eax, eax" }
        ],
        "callees":[]
      },
{
        "tag":"locret_10003011",
        "label":"locret_10003011",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10003012",
    "label":"sub_10003012",
    "type":"idapro",
    "callees":[
      { "tag":"ds_HeapFree" },
      { "tag":"esi" },
      { "tag":"sub_10004740" }
    ],
    "blocks":[
      {
        "tag":"sub_10003012",
        "label":"sub_10003012",
        "out_true":"loc_10003336",
        "out_false":"label_307",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"sub     esp, 10h" },
          { "str":"mov     ecx, [ebp+arg_0]" },
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"mov     esi, [ebp+arg_4]" },
          { "str":"mov     eax, [ecx+10h]" },
          { "str":"push    edi" },
          { "str":"mov     edi, esi" },
          { "str":"add     esi, 0FFFFFFFCh" },
          { "str":"sub     edi, [ecx+0Ch]" },
          { "str":"shr     edi, 0Fh" },
          { "str":"mov     ecx, edi" },
          { "str":"imul    ecx, 204h" },
          { "str":"lea     ecx, [ecx+eax+144h]" },
          { "str":"mov     [ebp+var_10], ecx" },
          { "str":"mov     ecx, [esi]" },
          { "str":"dec     ecx" },
          { "str":"test    cl, 1" },
          { "str":"mov     [ebp+var_4], ecx" },
          { "str":"jnz     loc_10003336" }
        ],
        "callees":[]
      },
{
        "tag":"label_307",
        "label":"label_307",
        "out_true":"loc_100030E8",
        "out_false":"label_308",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     edx, [ecx+esi]" },
          { "str":"lea     ebx, [ecx+esi]" },
          { "str":"mov     [ebp+var_C], edx" },
          { "str":"mov     edx, [esi-4]" },
          { "str":"mov     [ebp+var_8], edx" },
          { "str":"mov     edx, [ebp+var_C]" },
          { "str":"test    dl, 1" },
          { "str":"mov     [ebp+arg_4], ebx" },
          { "str":"jnz     short loc_100030E8" }
        ],
        "callees":[]
      },
{
        "tag":"label_308",
        "label":"label_308",
        "out_true":"loc_10003076",
        "out_false":"label_309",
        "last_inst":"jb",
        "instructions":[
          { "str":"sar     edx, 4" },
          { "str":"dec     edx" },
          { "str":"cmp     edx, 3Fh" },
          { "str":"jbe     short loc_10003076" }
        ],
        "callees":[]
      },
{
        "tag":"label_309",
        "label":"label_309",
        "out_true":"loc_10003076",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    3Fh" },
          { "str":"pop     edx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003076",
        "label":"loc_10003076",
        "out_true":"loc_100030CA",
        "out_false":"label_310",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ecx, [ebx+4]" },
          { "str":"cmp     ecx, [ebx+8]" },
          { "str":"jnz     short loc_100030CA" }
        ],
        "callees":[]
      },
{
        "tag":"label_310",
        "label":"label_310",
        "out_true":"loc_100030A1",
        "out_false":"label_311",
        "last_inst":"jnb",
        "instructions":[
          { "str":"cmp     edx, 20h" },
          { "str":"jnb     short loc_100030A1" }
        ],
        "callees":[]
      },
{
        "tag":"label_311",
        "label":"label_311",
        "out_true":"loc_100030C2",
        "out_false":"label_312",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ebx, 80000000h" },
          { "str":"mov     ecx, edx" },
          { "str":"shr     ebx, cl" },
          { "str":"lea     ecx, [edx+eax+4]" },
          { "str":"not     ebx" },
          { "str":"and     [eax+edi*4+44h], ebx" },
          { "str":"dec     byte ptr [ecx]" },
          { "str":"jnz     short loc_100030C2" }
        ],
        "callees":[]
      },
{
        "tag":"label_312",
        "label":"label_312",
        "out_true":"loc_100030C2",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     ecx, [ebp+arg_0]" },
          { "str":"and     [ecx], ebx" },
          { "str":"jmp     short loc_100030C2" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100030A1",
        "label":"loc_100030A1",
        "out_true":"loc_100030C2",
        "out_false":"label_313",
        "last_inst":"jnz",
        "instructions":[
          { "str":"lea     ecx, [edx-20h]" },
          { "str":"mov     ebx, 80000000h" },
          { "str":"shr     ebx, cl" },
          { "str":"lea     ecx, [edx+eax+4]" },
          { "str":"not     ebx" },
          { "str":"and     [eax+edi*4+0C4h], ebx" },
          { "str":"dec     byte ptr [ecx]" },
          { "str":"jnz     short loc_100030C2" }
        ],
        "callees":[]
      },
{
        "tag":"label_313",
        "label":"label_313",
        "out_true":"loc_100030C2",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ecx, [ebp+arg_0]" },
          { "str":"and     [ecx+4], ebx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100030C2",
        "label":"loc_100030C2",
        "out_true":"loc_100030CD",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     ecx, [ebp+var_4]" },
          { "str":"mov     ebx, [ebp+arg_4]" },
          { "str":"jmp     short loc_100030CD" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100030CA",
        "label":"loc_100030CA",
        "out_true":"loc_100030CD",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ecx, [ebp+var_4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100030CD",
        "label":"loc_100030CD",
        "out_true":"loc_100030E8",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     edx, [ebx+8]" },
          { "str":"mov     ebx, [ebx+4]" },
          { "str":"add     ecx, [ebp+var_C]" },
          { "str":"mov     [edx+4], ebx" },
          { "str":"mov     edx, [ebp+arg_4]" },
          { "str":"mov     [ebp+var_4], ecx" },
          { "str":"mov     ebx, [edx+4]" },
          { "str":"mov     edx, [edx+8]" },
          { "str":"mov     [ebx+8], edx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100030E8",
        "label":"loc_100030E8",
        "out_true":"loc_100030F6",
        "out_false":"label_314",
        "last_inst":"jb",
        "instructions":[
          { "str":"mov     edx, ecx" },
          { "str":"sar     edx, 4" },
          { "str":"dec     edx" },
          { "str":"cmp     edx, 3Fh" },
          { "str":"jbe     short loc_100030F6" }
        ],
        "callees":[]
      },
{
        "tag":"label_314",
        "label":"label_314",
        "out_true":"loc_100030F6",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    3Fh" },
          { "str":"pop     edx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100030F6",
        "label":"loc_100030F6",
        "out_true":"loc_10003199",
        "out_false":"label_315",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ebx, [ebp+var_8]" },
          { "str":"and     ebx, 1" },
          { "str":"mov     [ebp+var_C], ebx" },
          { "str":"jnz     loc_10003199" }
        ],
        "callees":[]
      },
{
        "tag":"label_315",
        "label":"label_315",
        "out_true":"loc_1000311B",
        "out_false":"label_316",
        "last_inst":"jb",
        "instructions":[
          { "str":"sub     esi, [ebp+var_8]" },
          { "str":"mov     ebx, [ebp+var_8]" },
          { "str":"sar     ebx, 4" },
          { "str":"push    3Fh" },
          { "str":"mov     [ebp+arg_4], esi" },
          { "str":"dec     ebx" },
          { "str":"pop     esi" },
          { "str":"cmp     ebx, esi" },
          { "str":"jbe     short loc_1000311B" }
        ],
        "callees":[]
      },
{
        "tag":"label_316",
        "label":"label_316",
        "out_true":"loc_1000311B",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ebx, esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000311B",
        "label":"loc_1000311B",
        "out_true":"loc_1000312D",
        "out_false":"label_317",
        "last_inst":"jb",
        "instructions":[
          { "str":"add     ecx, [ebp+var_8]" },
          { "str":"mov     edx, ecx" },
          { "str":"mov     [ebp+var_4], ecx" },
          { "str":"sar     edx, 4" },
          { "str":"dec     edx" },
          { "str":"cmp     edx, esi" },
          { "str":"jbe     short loc_1000312D" }
        ],
        "callees":[]
      },
{
        "tag":"label_317",
        "label":"label_317",
        "out_true":"loc_1000312D",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     edx, esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000312D",
        "label":"loc_1000312D",
        "out_true":"loc_10003194",
        "out_false":"label_318",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     ebx, edx" },
          { "str":"jz      short loc_10003194" }
        ],
        "callees":[]
      },
{
        "tag":"label_318",
        "label":"label_318",
        "out_true":"loc_1000317C",
        "out_false":"label_319",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ecx, [ebp+arg_4]" },
          { "str":"mov     esi, [ecx+4]" },
          { "str":"cmp     esi, [ecx+8]" },
          { "str":"jnz     short loc_1000317C" }
        ],
        "callees":[]
      },
{
        "tag":"label_319",
        "label":"label_319",
        "out_true":"loc_1000315D",
        "out_false":"label_320",
        "last_inst":"jnb",
        "instructions":[
          { "str":"cmp     ebx, 20h" },
          { "str":"jnb     short loc_1000315D" }
        ],
        "callees":[]
      },
{
        "tag":"label_320",
        "label":"label_320",
        "out_true":"loc_1000317C",
        "out_false":"label_321",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     esi, 80000000h" },
          { "str":"mov     ecx, ebx" },
          { "str":"shr     esi, cl" },
          { "str":"not     esi" },
          { "str":"and     [eax+edi*4+44h], esi" },
          { "str":"dec     byte ptr [ebx+eax+4]" },
          { "str":"jnz     short loc_1000317C" }
        ],
        "callees":[]
      },
{
        "tag":"label_321",
        "label":"label_321",
        "out_true":"loc_1000317C",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     ecx, [ebp+arg_0]" },
          { "str":"and     [ecx], esi" },
          { "str":"jmp     short loc_1000317C" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000315D",
        "label":"loc_1000315D",
        "out_true":"loc_1000317C",
        "out_false":"label_322",
        "last_inst":"jnz",
        "instructions":[
          { "str":"lea     ecx, [ebx-20h]" },
          { "str":"mov     esi, 80000000h" },
          { "str":"shr     esi, cl" },
          { "str":"not     esi" },
          { "str":"and     [eax+edi*4+0C4h], esi" },
          { "str":"dec     byte ptr [ebx+eax+4]" },
          { "str":"jnz     short loc_1000317C" }
        ],
        "callees":[]
      },
{
        "tag":"label_322",
        "label":"label_322",
        "out_true":"loc_1000317C",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ecx, [ebp+arg_0]" },
          { "str":"and     [ecx+4], esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000317C",
        "label":"loc_1000317C",
        "out_true":"loc_10003194",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ecx, [ebp+arg_4]" },
          { "str":"mov     esi, [ecx+8]" },
          { "str":"mov     ecx, [ecx+4]" },
          { "str":"mov     [esi+4], ecx" },
          { "str":"mov     ecx, [ebp+arg_4]" },
          { "str":"mov     esi, [ecx+4]" },
          { "str":"mov     ecx, [ecx+8]" },
          { "str":"mov     [esi+8], ecx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003194",
        "label":"loc_10003194",
        "out_true":"loc_1000319C",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     esi, [ebp+arg_4]" },
          { "str":"jmp     short loc_1000319C" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003199",
        "label":"loc_10003199",
        "out_true":"loc_1000319C",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ebx, [ebp+arg_0]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000319C",
        "label":"loc_1000319C",
        "out_true":"loc_100031AA",
        "out_false":"label_323",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     [ebp+var_C], 0" },
          { "str":"jnz     short loc_100031AA" }
        ],
        "callees":[]
      },
{
        "tag":"label_323",
        "label":"label_323",
        "out_true":"loc_1000322B",
        "out_false":"loc_100031AA",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     ebx, edx" },
          { "str":"jz      loc_1000322B" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100031AA",
        "label":"loc_100031AA",
        "out_true":"loc_1000322B",
        "out_false":"label_324",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ecx, [ebp+var_10]" },
          { "str":"mov     ebx, [ecx+edx*8+4]" },
          { "str":"lea     ecx, [ecx+edx*8]" },
          { "str":"mov     [esi+4], ebx" },
          { "str":"mov     [esi+8], ecx" },
          { "str":"mov     [ecx+4], esi" },
          { "str":"mov     ecx, [esi+4]" },
          { "str":"mov     [ecx+8], esi" },
          { "str":"mov     ecx, [esi+4]" },
          { "str":"cmp     ecx, [esi+8]" },
          { "str":"jnz     short loc_1000322B" }
        ],
        "callees":[]
      },
{
        "tag":"label_324",
        "label":"label_324",
        "out_true":"loc_10003202",
        "out_false":"label_325",
        "last_inst":"jnb",
        "instructions":[
          { "str":"mov     cl, [edx+eax+4]" },
          { "str":"cmp     edx, 20h" },
          { "str":"mov     byte ptr [ebp+arg_4+3], cl" },
          { "str":"inc     cl" },
          { "str":"mov     [edx+eax+4], cl" },
          { "str":"jnb     short loc_10003202" }
        ],
        "callees":[]
      },
{
        "tag":"label_325",
        "label":"label_325",
        "out_true":"loc_100031F1",
        "out_false":"label_326",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     byte ptr [ebp+arg_4+3], 0" },
          { "str":"jnz     short loc_100031F1" }
        ],
        "callees":[]
      },
{
        "tag":"label_326",
        "label":"label_326",
        "out_true":"loc_100031F1",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ebx, 80000000h" },
          { "str":"mov     ecx, edx" },
          { "str":"shr     ebx, cl" },
          { "str":"mov     ecx, [ebp+arg_0]" },
          { "str":"or      [ecx], ebx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100031F1",
        "label":"loc_100031F1",
        "out_true":"loc_1000322B",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     ebx, 80000000h" },
          { "str":"mov     ecx, edx" },
          { "str":"shr     ebx, cl" },
          { "str":"lea     eax, [eax+edi*4+44h]" },
          { "str":"or      [eax], ebx" },
          { "str":"jmp     short loc_1000322B" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003202",
        "label":"loc_10003202",
        "out_true":"loc_10003218",
        "out_false":"label_327",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     byte ptr [ebp+arg_4+3], 0" },
          { "str":"jnz     short loc_10003218" }
        ],
        "callees":[]
      },
{
        "tag":"label_327",
        "label":"label_327",
        "out_true":"loc_10003218",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"lea     ecx, [edx-20h]" },
          { "str":"mov     ebx, 80000000h" },
          { "str":"shr     ebx, cl" },
          { "str":"mov     ecx, [ebp+arg_0]" },
          { "str":"or      [ecx+4], ebx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003218",
        "label":"loc_10003218",
        "out_true":"loc_1000322B",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"lea     ecx, [edx-20h]" },
          { "str":"mov     edx, 80000000h" },
          { "str":"shr     edx, cl" },
          { "str":"lea     eax, [eax+edi*4+0C4h]" },
          { "str":"or      [eax], edx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000322B",
        "label":"loc_1000322B",
        "out_true":"loc_10003336",
        "out_false":"label_328",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     eax, [ebp+var_4]" },
          { "str":"mov     [esi], eax" },
          { "str":"mov     [eax+esi-4], eax" },
          { "str":"mov     eax, [ebp+var_10]" },
          { "str":"dec     dword ptr [eax]" },
          { "str":"jnz     loc_10003336" }
        ],
        "callees":[]
      },
{
        "tag":"label_328",
        "label":"label_328",
        "out_true":"loc_10003328",
        "out_false":"label_329",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, dword_10008DA4" },
          { "str":"test    eax, eax" },
          { "str":"jz      loc_10003328" }
        ],
        "callees":[]
      },
{
        "tag":"label_329",
        "label":"label_329",
        "out_true":"loc_100032B9",
        "out_false":"label_330",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ecx, dword_10008D9C" },
          { "str":"mov     esi, ds:VirtualFree" },
          { "str":"shl     ecx, 0Fh" },
          { "str":"add     ecx, [eax+0Ch]" },
          { "str":"mov     ebx, 8000h" },
          { "str":"push    4000h" },
          { "str":"push    ebx" },
          { "str":"push    ecx" },
          { "str":"call    esi" },
          { "str":"mov     ecx, dword_10008D9C" },
          { "str":"mov     eax, dword_10008DA4" },
          { "str":"mov     edx, 80000000h" },
          { "str":"shr     edx, cl" },
          { "str":"or      [eax+8], edx" },
          { "str":"mov     eax, dword_10008DA4" },
          { "str":"mov     ecx, dword_10008D9C" },
          { "str":"mov     eax, [eax+10h]" },
          { "str":"and     dword ptr [eax+ecx*4+0C4h], 0" },
          { "str":"mov     eax, dword_10008DA4" },
          { "str":"mov     eax, [eax+10h]" },
          { "str":"dec     byte ptr [eax+43h]" },
          { "str":"mov     eax, dword_10008DA4" },
          { "str":"mov     ecx, [eax+10h]" },
          { "str":"cmp     byte ptr [ecx+43h], 0" },
          { "str":"jnz     short loc_100032B9" }
        ],
        "callees":[
          { "tag":"esi" }
        ]
      },
{
        "tag":"label_330",
        "label":"label_330",
        "out_true":"loc_100032B9",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"and     dword ptr [eax+4], 0FFFFFFFEh" },
          { "str":"mov     eax, dword_10008DA4" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100032B9",
        "label":"loc_100032B9",
        "out_true":"loc_10003328",
        "out_false":"label_331",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     dword ptr [eax+8], 0FFFFFFFFh" },
          { "str":"jnz     short loc_10003328" }
        ],
        "callees":[]
      },
{
        "tag":"label_331",
        "label":"label_331",
        "out_true":"loc_1000331E",
        "out_false":"label_332",
        "last_inst":"jb",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"push    0" },
          { "str":"push    dword ptr [eax+0Ch]" },
          { "str":"call    esi" },
          { "str":"mov     eax, dword_10008DA4" },
          { "str":"push    dword ptr [eax+10h]" },
          { "str":"push    0" },
          { "str":"push    hHeap" },
          { "str":"call    ds:HeapFree" },
          { "str":"mov     eax, dword_10008DA8" },
          { "str":"mov     edx, lpMem" },
          { "str":"lea     eax, [eax+eax*4]" },
          { "str":"shl     eax, 2" },
          { "str":"mov     ecx, eax" },
          { "str":"mov     eax, dword_10008DA4" },
          { "str":"sub     ecx, eax" },
          { "str":"lea     ecx, [ecx+edx-14h]" },
          { "str":"push    ecx" },
          { "str":"lea     ecx, [eax+14h]" },
          { "str":"push    ecx" },
          { "str":"push    eax" },
          { "str":"call    sub_10004740" },
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"add     esp, 0Ch" },
          { "str":"dec     dword_10008DA8" },
          { "str":"cmp     eax, dword_10008DA4" },
          { "str":"jbe     short loc_1000331E" }
        ],
        "callees":[
          { "tag":"ds_HeapFree" },
          { "tag":"esi" },
          { "tag":"sub_10004740" }
        ]
      },
{
        "tag":"label_332",
        "label":"label_332",
        "out_true":"loc_1000331E",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"sub     [ebp+arg_0], 14h" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000331E",
        "label":"loc_1000331E",
        "out_true":"loc_10003328",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, lpMem" },
          { "str":"mov     dword_10008DA0, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003328",
        "label":"loc_10003328",
        "out_true":"loc_10003336",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"mov     dword_10008D9C, edi" },
          { "str":"mov     dword_10008DA4, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003336",
        "label":"loc_10003336",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_1000333B",
    "label":"sub_1000333B",
    "type":"idapro",
    "callees":[
      { "tag":"sub_10003644" },
      { "tag":"sub_100036F5" }
    ],
    "blocks":[
      {
        "tag":"sub_1000333B",
        "label":"sub_1000333B",
        "out_true":"loc_1000337B",
        "out_false":"label_333",
        "last_inst":"jg",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"sub     esp, 14h" },
          { "str":"mov     eax, dword_10008DA8" },
          { "str":"mov     edx, lpMem" },
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"lea     eax, [eax+eax*4]" },
          { "str":"push    edi" },
          { "str":"lea     edi, [edx+eax*4]" },
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"mov     [ebp+var_4], edi" },
          { "str":"lea     ecx, [eax+17h]" },
          { "str":"and     ecx, 0FFFFFFF0h" },
          { "str":"mov     [ebp+var_10], ecx" },
          { "str":"sar     ecx, 4" },
          { "str":"dec     ecx" },
          { "str":"cmp     ecx, 20h" },
          { "str":"jge     short loc_1000337B" }
        ],
        "callees":[]
      },
{
        "tag":"label_333",
        "label":"label_333",
        "out_true":"loc_1000338B",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"or      esi, 0FFFFFFFFh" },
          { "str":"shr     esi, cl" },
          { "str":"or      [ebp+var_8], 0FFFFFFFFh" },
          { "str":"mov     [ebp+var_C], esi" },
          { "str":"jmp     short loc_1000338B" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000337B",
        "label":"loc_1000337B",
        "out_true":"loc_1000338B",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"add     ecx, 0FFFFFFE0h" },
          { "str":"or      eax, 0FFFFFFFFh" },
          { "str":"xor     esi, esi" },
          { "str":"shr     eax, cl" },
          { "str":"mov     [ebp+var_C], esi" },
          { "str":"mov     [ebp+var_8], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000338B",
        "label":"loc_1000338B",
        "out_true":"loc_100033B2",
        "out_false":"loc_10003399",
        "last_inst":"jnb",
        "instructions":[
          { "str":"mov     eax, dword_10008DA0" },
          { "str":"mov     ebx, eax" },
          { "str":"cmp     ebx, edi" },
          { "str":"mov     [ebp+arg_0], ebx" },
          { "str":"jnb     short loc_100033B2" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003399",
        "label":"loc_10003399",
        "out_true":"loc_100033B2",
        "out_false":"label_334",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ecx, [ebx+4]" },
          { "str":"mov     edi, [ebx]" },
          { "str":"and     ecx, [ebp+var_8]" },
          { "str":"and     edi, esi" },
          { "str":"or      ecx, edi" },
          { "str":"jnz     short loc_100033B2" }
        ],
        "callees":[]
      },
{
        "tag":"label_334",
        "label":"label_334",
        "out_true":"loc_10003399",
        "out_false":"loc_100033B2",
        "last_inst":"jb",
        "instructions":[
          { "str":"add     ebx, 14h" },
          { "str":"cmp     ebx, [ebp+var_4]" },
          { "str":"mov     [ebp+arg_0], ebx" },
          { "str":"jb      short loc_10003399" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100033B2",
        "label":"loc_100033B2",
        "out_true":"loc_10003430",
        "out_false":"label_335",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     ebx, [ebp+var_4]" },
          { "str":"jnz     short loc_10003430" }
        ],
        "callees":[]
      },
{
        "tag":"label_335",
        "label":"label_335",
        "out_true":"loc_100033B9",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ebx, edx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100033B9",
        "label":"loc_100033B9",
        "out_true":"loc_100033D5",
        "out_false":"label_336",
        "last_inst":"jnb",
        "instructions":[
          { "str":"cmp     ebx, eax" },
          { "str":"mov     [ebp+arg_0], ebx" },
          { "str":"jnb     short loc_100033D5" }
        ],
        "callees":[]
      },
{
        "tag":"label_336",
        "label":"label_336",
        "out_true":"loc_100033D3",
        "out_false":"label_337",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ecx, [ebx+4]" },
          { "str":"mov     edi, [ebx]" },
          { "str":"and     ecx, [ebp+var_8]" },
          { "str":"and     edi, esi" },
          { "str":"or      ecx, edi" },
          { "str":"jnz     short loc_100033D3" }
        ],
        "callees":[]
      },
{
        "tag":"label_337",
        "label":"label_337",
        "out_true":"loc_100033B9",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"add     ebx, 14h" },
          { "str":"jmp     short loc_100033B9" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100033D3",
        "label":"loc_100033D3",
        "out_true":"loc_100033D5",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"cmp     ebx, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100033D5",
        "label":"loc_100033D5",
        "out_true":"loc_10003430",
        "out_false":"loc_100033D7",
        "last_inst":"jnz",
        "instructions":[
          { "str":"jnz     short loc_10003430" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100033D7",
        "label":"loc_100033D7",
        "out_true":"loc_100033ED",
        "out_false":"label_338",
        "last_inst":"jnb",
        "instructions":[
          { "str":"cmp     ebx, [ebp+var_4]" },
          { "str":"jnb     short loc_100033ED" }
        ],
        "callees":[]
      },
{
        "tag":"label_338",
        "label":"label_338",
        "out_true":"loc_100033EA",
        "out_false":"label_339",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     dword ptr [ebx+8], 0" },
          { "str":"jnz     short loc_100033EA" }
        ],
        "callees":[]
      },
{
        "tag":"label_339",
        "label":"label_339",
        "out_true":"loc_100033D7",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"add     ebx, 14h" },
          { "str":"mov     [ebp+arg_0], ebx" },
          { "str":"jmp     short loc_100033D7" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100033EA",
        "label":"loc_100033EA",
        "out_true":"loc_100033ED",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"cmp     ebx, [ebp+var_4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100033ED",
        "label":"loc_100033ED",
        "out_true":"loc_10003415",
        "out_false":"label_340",
        "last_inst":"jnz",
        "instructions":[
          { "str":"jnz     short loc_10003415" }
        ],
        "callees":[]
      },
{
        "tag":"label_340",
        "label":"label_340",
        "out_true":"loc_100033F1",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ebx, edx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100033F1",
        "label":"loc_100033F1",
        "out_true":"loc_10003405",
        "out_false":"label_341",
        "last_inst":"jnb",
        "instructions":[
          { "str":"cmp     ebx, eax" },
          { "str":"mov     [ebp+arg_0], ebx" },
          { "str":"jnb     short loc_10003405" }
        ],
        "callees":[]
      },
{
        "tag":"label_341",
        "label":"label_341",
        "out_true":"loc_10003403",
        "out_false":"label_342",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     dword ptr [ebx+8], 0" },
          { "str":"jnz     short loc_10003403" }
        ],
        "callees":[]
      },
{
        "tag":"label_342",
        "label":"label_342",
        "out_true":"loc_100033F1",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"add     ebx, 14h" },
          { "str":"jmp     short loc_100033F1" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003403",
        "label":"loc_10003403",
        "out_true":"loc_10003405",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"cmp     ebx, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003405",
        "label":"loc_10003405",
        "out_true":"loc_10003415",
        "out_false":"label_343",
        "last_inst":"jnz",
        "instructions":[
          { "str":"jnz     short loc_10003415" }
        ],
        "callees":[]
      },
{
        "tag":"label_343",
        "label":"label_343",
        "out_true":"loc_10003429",
        "out_false":"loc_10003415",
        "last_inst":"jz",
        "instructions":[
          { "str":"call    sub_10003644" },
          { "str":"mov     ebx, eax" },
          { "str":"test    ebx, ebx" },
          { "str":"mov     [ebp+arg_0], ebx" },
          { "str":"jz      short loc_10003429" }
        ],
        "callees":[
          { "tag":"sub_10003644" }
        ]
      },
{
        "tag":"loc_10003415",
        "label":"loc_10003415",
        "out_true":"loc_10003430",
        "out_false":"loc_10003429",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"call    sub_100036F5" },
          { "str":"pop     ecx" },
          { "str":"mov     ecx, [ebx+10h]" },
          { "str":"mov     [ecx], eax" },
          { "str":"mov     eax, [ebx+10h]" },
          { "str":"cmp     dword ptr [eax], 0FFFFFFFFh" },
          { "str":"jnz     short loc_10003430" }
        ],
        "callees":[
          { "tag":"sub_100036F5" }
        ]
      },
{
        "tag":"loc_10003429",
        "label":"loc_10003429",
        "out_true":"loc_1000363F",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"xor     eax, eax" },
          { "str":"jmp     loc_1000363F" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003430",
        "label":"loc_10003430",
        "out_true":"loc_10003457",
        "out_false":"label_344",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     dword_10008DA0, ebx" },
          { "str":"mov     eax, [ebx+10h]" },
          { "str":"mov     edx, [eax]" },
          { "str":"cmp     edx, 0FFFFFFFFh" },
          { "str":"mov     [ebp+var_4], edx" },
          { "str":"jz      short loc_10003457" }
        ],
        "callees":[]
      },
{
        "tag":"label_344",
        "label":"label_344",
        "out_true":"loc_1000348E",
        "out_false":"loc_10003457",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ecx, [eax+edx*4+0C4h]" },
          { "str":"mov     edi, [eax+edx*4+44h]" },
          { "str":"and     ecx, [ebp+var_8]" },
          { "str":"and     edi, esi" },
          { "str":"or      ecx, edi" },
          { "str":"jnz     short loc_1000348E" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003457",
        "label":"loc_10003457",
        "out_true":"loc_1000348B",
        "out_false":"loc_10003474",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     edx, [eax+0C4h]" },
          { "str":"mov     esi, [eax+44h]" },
          { "str":"and     edx, [ebp+var_8]" },
          { "str":"and     esi, [ebp+var_C]" },
          { "str":"and     [ebp+var_4], 0" },
          { "str":"lea     ecx, [eax+44h]" },
          { "str":"or      edx, esi" },
          { "str":"mov     esi, [ebp+var_C]" },
          { "str":"jnz     short loc_1000348B" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003474",
        "label":"loc_10003474",
        "out_true":"loc_10003474",
        "out_false":"loc_1000348B",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     edx, [ecx+84h]" },
          { "str":"inc     [ebp+var_4]" },
          { "str":"and     edx, [ebp+var_8]" },
          { "str":"add     ecx, 4" },
          { "str":"mov     edi, esi" },
          { "str":"and     edi, [ecx]" },
          { "str":"or      edx, edi" },
          { "str":"jz      short loc_10003474" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000348B",
        "label":"loc_1000348B",
        "out_true":"loc_1000348E",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     edx, [ebp+var_4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000348E",
        "label":"loc_1000348E",
        "out_true":"loc_100034B7",
        "out_false":"label_345",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ecx, edx" },
          { "str":"xor     edi, edi" },
          { "str":"imul    ecx, 204h" },
          { "str":"lea     ecx, [ecx+eax+144h]" },
          { "str":"mov     [ebp+var_C], ecx" },
          { "str":"mov     ecx, [eax+edx*4+44h]" },
          { "str":"and     ecx, esi" },
          { "str":"jnz     short loc_100034B7" }
        ],
        "callees":[]
      },
{
        "tag":"label_345",
        "label":"label_345",
        "out_true":"loc_100034B7",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ecx, [eax+edx*4+0C4h]" },
          { "str":"push    20h" },
          { "str":"and     ecx, [ebp+var_8]" },
          { "str":"pop     edi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100034B7",
        "label":"loc_100034B7",
        "out_true":"loc_100034C0",
        "out_false":"label_346",
        "last_inst":"jl",
        "instructions":[
          { "str":"test    ecx, ecx" },
          { "str":"jl      short loc_100034C0" }
        ],
        "callees":[]
      },
{
        "tag":"label_346",
        "label":"label_346",
        "out_true":"loc_100034B7",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"shl     ecx, 1" },
          { "str":"inc     edi" },
          { "str":"jmp     short loc_100034B7" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100034C0",
        "label":"loc_100034C0",
        "out_true":"loc_100034DD",
        "out_false":"label_347",
        "last_inst":"jl",
        "instructions":[
          { "str":"mov     ecx, [ebp+var_C]" },
          { "str":"mov     edx, [ecx+edi*8+4]" },
          { "str":"mov     ecx, [edx]" },
          { "str":"sub     ecx, [ebp+var_10]" },
          { "str":"mov     esi, ecx" },
          { "str":"mov     [ebp+var_8], ecx" },
          { "str":"sar     esi, 4" },
          { "str":"dec     esi" },
          { "str":"cmp     esi, 3Fh" },
          { "str":"jle     short loc_100034DD" }
        ],
        "callees":[]
      },
{
        "tag":"label_347",
        "label":"label_347",
        "out_true":"loc_100034DD",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    3Fh" },
          { "str":"pop     esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100034DD",
        "label":"loc_100034DD",
        "out_true":"loc_100035F2",
        "out_false":"label_348",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     esi, edi" },
          { "str":"jz      loc_100035F2" }
        ],
        "callees":[]
      },
{
        "tag":"label_348",
        "label":"label_348",
        "out_true":"loc_1000354E",
        "out_false":"label_349",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ecx, [edx+4]" },
          { "str":"cmp     ecx, [edx+8]" },
          { "str":"jnz     short loc_1000354E" }
        ],
        "callees":[]
      },
{
        "tag":"label_349",
        "label":"label_349",
        "out_true":"loc_1000351D",
        "out_false":"label_350",
        "last_inst":"jg",
        "instructions":[
          { "str":"cmp     edi, 20h" },
          { "str":"jge     short loc_1000351D" }
        ],
        "callees":[]
      },
{
        "tag":"label_350",
        "label":"label_350",
        "out_true":"loc_1000354B",
        "out_false":"label_351",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ebx, 80000000h" },
          { "str":"mov     ecx, edi" },
          { "str":"shr     ebx, cl" },
          { "str":"mov     ecx, [ebp+var_4]" },
          { "str":"lea     edi, [eax+edi+4]" },
          { "str":"not     ebx" },
          { "str":"mov     [ebp+var_14], ebx" },
          { "str":"and     ebx, [eax+ecx*4+44h]" },
          { "str":"mov     [eax+ecx*4+44h], ebx" },
          { "str":"dec     byte ptr [edi]" },
          { "str":"jnz     short loc_1000354B" }
        ],
        "callees":[]
      },
{
        "tag":"label_351",
        "label":"label_351",
        "out_true":"loc_1000354E",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     ebx, [ebp+arg_0]" },
          { "str":"mov     ecx, [ebp+var_14]" },
          { "str":"and     [ebx], ecx" },
          { "str":"jmp     short loc_1000354E" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000351D",
        "label":"loc_1000351D",
        "out_true":"loc_1000354B",
        "out_false":"label_352",
        "last_inst":"jnz",
        "instructions":[
          { "str":"lea     ecx, [edi-20h]" },
          { "str":"mov     ebx, 80000000h" },
          { "str":"shr     ebx, cl" },
          { "str":"mov     ecx, [ebp+var_4]" },
          { "str":"lea     edi, [eax+edi+4]" },
          { "str":"lea     ecx, [eax+ecx*4+0C4h]" },
          { "str":"not     ebx" },
          { "str":"and     [ecx], ebx" },
          { "str":"dec     byte ptr [edi]" },
          { "str":"mov     [ebp+var_14], ebx" },
          { "str":"jnz     short loc_1000354B" }
        ],
        "callees":[]
      },
{
        "tag":"label_352",
        "label":"label_352",
        "out_true":"loc_1000354E",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     ebx, [ebp+arg_0]" },
          { "str":"mov     ecx, [ebp+var_14]" },
          { "str":"and     [ebx+4], ecx" },
          { "str":"jmp     short loc_1000354E" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000354B",
        "label":"loc_1000354B",
        "out_true":"loc_1000354E",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ebx, [ebp+arg_0]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000354E",
        "label":"loc_1000354E",
        "out_true":"loc_100035FE",
        "out_false":"label_353",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     ecx, [edx+8]" },
          { "str":"mov     edi, [edx+4]" },
          { "str":"cmp     [ebp+var_8], 0" },
          { "str":"mov     [ecx+4], edi" },
          { "str":"mov     ecx, [edx+4]" },
          { "str":"mov     edi, [edx+8]" },
          { "str":"mov     [ecx+8], edi" },
          { "str":"jz      loc_100035FE" }
        ],
        "callees":[]
      },
{
        "tag":"label_353",
        "label":"label_353",
        "out_true":"loc_100035EF",
        "out_false":"label_354",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ecx, [ebp+var_C]" },
          { "str":"mov     edi, [ecx+esi*8+4]" },
          { "str":"lea     ecx, [ecx+esi*8]" },
          { "str":"mov     [edx+4], edi" },
          { "str":"mov     [edx+8], ecx" },
          { "str":"mov     [ecx+4], edx" },
          { "str":"mov     ecx, [edx+4]" },
          { "str":"mov     [ecx+8], edx" },
          { "str":"mov     ecx, [edx+4]" },
          { "str":"cmp     ecx, [edx+8]" },
          { "str":"jnz     short loc_100035EF" }
        ],
        "callees":[]
      },
{
        "tag":"label_354",
        "label":"label_354",
        "out_true":"loc_100035C0",
        "out_false":"label_355",
        "last_inst":"jg",
        "instructions":[
          { "str":"mov     cl, [esi+eax+4]" },
          { "str":"cmp     esi, 20h" },
          { "str":"mov     byte ptr [ebp+arg_0+3], cl" },
          { "str":"jge     short loc_100035C0" }
        ],
        "callees":[]
      },
{
        "tag":"label_355",
        "label":"label_355",
        "out_true":"loc_100035AE",
        "out_false":"label_356",
        "last_inst":"jnz",
        "instructions":[
          { "str":"inc     cl" },
          { "str":"cmp     byte ptr [ebp+arg_0+3], 0" },
          { "str":"mov     [esi+eax+4], cl" },
          { "str":"jnz     short loc_100035AE" }
        ],
        "callees":[]
      },
{
        "tag":"label_356",
        "label":"label_356",
        "out_true":"loc_100035AE",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     edi, 80000000h" },
          { "str":"mov     ecx, esi" },
          { "str":"shr     edi, cl" },
          { "str":"or      [ebx], edi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100035AE",
        "label":"loc_100035AE",
        "out_true":"loc_100035EF",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     edi, 80000000h" },
          { "str":"mov     ecx, esi" },
          { "str":"shr     edi, cl" },
          { "str":"mov     ecx, [ebp+var_4]" },
          { "str":"or      [eax+ecx*4+44h], edi" },
          { "str":"jmp     short loc_100035EF" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100035C0",
        "label":"loc_100035C0",
        "out_true":"loc_100035D9",
        "out_false":"label_357",
        "last_inst":"jnz",
        "instructions":[
          { "str":"inc     cl" },
          { "str":"cmp     byte ptr [ebp+arg_0+3], 0" },
          { "str":"mov     [esi+eax+4], cl" },
          { "str":"jnz     short loc_100035D9" }
        ],
        "callees":[]
      },
{
        "tag":"label_357",
        "label":"label_357",
        "out_true":"loc_100035D9",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"lea     ecx, [esi-20h]" },
          { "str":"mov     edi, 80000000h" },
          { "str":"shr     edi, cl" },
          { "str":"or      [ebx+4], edi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100035D9",
        "label":"loc_100035D9",
        "out_true":"loc_100035EF",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ecx, [ebp+var_4]" },
          { "str":"lea     edi, [eax+ecx*4+0C4h]" },
          { "str":"lea     ecx, [esi-20h]" },
          { "str":"mov     esi, 80000000h" },
          { "str":"shr     esi, cl" },
          { "str":"or      [edi], esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100035EF",
        "label":"loc_100035EF",
        "out_true":"loc_100035F2",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ecx, [ebp+var_8]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100035F2",
        "label":"loc_100035F2",
        "out_true":"loc_10003601",
        "out_false":"label_358",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    ecx, ecx" },
          { "str":"jz      short loc_10003601" }
        ],
        "callees":[]
      },
{
        "tag":"label_358",
        "label":"label_358",
        "out_true":"loc_10003601",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     [edx], ecx" },
          { "str":"mov     [ecx+edx-4], ecx" },
          { "str":"jmp     short loc_10003601" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100035FE",
        "label":"loc_100035FE",
        "out_true":"loc_10003601",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ecx, [ebp+var_8]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003601",
        "label":"loc_10003601",
        "out_true":"loc_10003637",
        "out_false":"label_359",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     esi, [ebp+var_10]" },
          { "str":"add     edx, ecx" },
          { "str":"lea     ecx, [esi+1]" },
          { "str":"mov     [edx], ecx" },
          { "str":"mov     [edx+esi-4], ecx" },
          { "str":"mov     esi, [ebp+var_C]" },
          { "str":"mov     ecx, [esi]" },
          { "str":"test    ecx, ecx" },
          { "str":"lea     edi, [ecx+1]" },
          { "str":"mov     [esi], edi" },
          { "str":"jnz     short loc_10003637" }
        ],
        "callees":[]
      },
{
        "tag":"label_359",
        "label":"label_359",
        "out_true":"loc_10003637",
        "out_false":"label_360",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     ebx, dword_10008DA4" },
          { "str":"jnz     short loc_10003637" }
        ],
        "callees":[]
      },
{
        "tag":"label_360",
        "label":"label_360",
        "out_true":"loc_10003637",
        "out_false":"label_361",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ecx, [ebp+var_4]" },
          { "str":"cmp     ecx, dword_10008D9C" },
          { "str":"jnz     short loc_10003637" }
        ],
        "callees":[]
      },
{
        "tag":"label_361",
        "label":"label_361",
        "out_true":"loc_10003637",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"and     dword_10008DA4, 0" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003637",
        "label":"loc_10003637",
        "out_true":"loc_1000363F",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ecx, [ebp+var_4]" },
          { "str":"mov     [eax], ecx" },
          { "str":"lea     eax, [edx+4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000363F",
        "label":"loc_1000363F",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10003644",
    "label":"sub_10003644",
    "type":"idapro",
    "callees":[
      { "tag":"ds_HeapAlloc" },
      { "tag":"ds_HeapFree" },
      { "tag":"ds_HeapReAlloc" },
      { "tag":"ds_VirtualAlloc" }
    ],
    "blocks":[
      {
        "tag":"sub_10003644",
        "label":"sub_10003644",
        "out_true":"loc_10003687",
        "out_false":"label_362",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     eax, dword_10008DA8" },
          { "str":"mov     ecx, dword_10008D98" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"xor     edi, edi" },
          { "str":"cmp     eax, ecx" },
          { "str":"jnz     short loc_10003687" }
        ],
        "callees":[]
      },
{
        "tag":"label_362",
        "label":"label_362",
        "out_true":"loc_100036D7",
        "out_false":"label_363",
        "last_inst":"jz",
        "instructions":[
          { "str":"lea     eax, [ecx+ecx*4+50h]" },
          { "str":"shl     eax, 2" },
          { "str":"push    eax" },
          { "str":"push    lpMem" },
          { "str":"push    edi" },
          { "str":"push    hHeap" },
          { "str":"call    ds:HeapReAlloc" },
          { "str":"cmp     eax, edi" },
          { "str":"jz      short loc_100036D7" }
        ],
        "callees":[
          { "tag":"ds_HeapReAlloc" }
        ]
      },
{
        "tag":"label_363",
        "label":"label_363",
        "out_true":"loc_10003687",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"add     dword_10008D98, 10h" },
          { "str":"mov     lpMem, eax" },
          { "str":"mov     eax, dword_10008DA8" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003687",
        "label":"loc_10003687",
        "out_true":"loc_100036D7",
        "out_false":"label_364",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     ecx, lpMem" },
          { "str":"push    41C4h" },
          { "str":"push    8" },
          { "str":"lea     eax, [eax+eax*4]" },
          { "str":"push    hHeap" },
          { "str":"lea     esi, [ecx+eax*4]" },
          { "str":"call    ds:HeapAlloc" },
          { "str":"cmp     eax, edi" },
          { "str":"mov     [esi+10h], eax" },
          { "str":"jz      short loc_100036D7" }
        ],
        "callees":[
          { "tag":"ds_HeapAlloc" }
        ]
      },
{
        "tag":"label_364",
        "label":"label_364",
        "out_true":"loc_100036DB",
        "out_false":"label_365",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    4" },
          { "str":"push    2000h" },
          { "str":"push    100000h" },
          { "str":"push    edi" },
          { "str":"call    ds:VirtualAlloc" },
          { "str":"cmp     eax, edi" },
          { "str":"mov     [esi+0Ch], eax" },
          { "str":"jnz     short loc_100036DB" }
        ],
        "callees":[
          { "tag":"ds_VirtualAlloc" }
        ]
      },
{
        "tag":"label_365",
        "label":"label_365",
        "out_true":"loc_100036D7",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    dword ptr [esi+10h]" },
          { "str":"push    edi" },
          { "str":"push    hHeap" },
          { "str":"call    ds:HeapFree" }
        ],
        "callees":[
          { "tag":"ds_HeapFree" }
        ]
      },
{
        "tag":"loc_100036D7",
        "label":"loc_100036D7",
        "out_true":"loc_100036F2",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"xor     eax, eax" },
          { "str":"jmp     short loc_100036F2" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100036DB",
        "label":"loc_100036DB",
        "out_true":"loc_100036F2",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"or      dword ptr [esi+8], 0FFFFFFFFh" },
          { "str":"mov     [esi], edi" },
          { "str":"mov     [esi+4], edi" },
          { "str":"inc     dword_10008DA8" },
          { "str":"mov     eax, [esi+10h]" },
          { "str":"or      dword ptr [eax], 0FFFFFFFFh" },
          { "str":"mov     eax, esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100036F2",
        "label":"loc_100036F2",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_100036F5",
    "label":"sub_100036F5",
    "type":"idapro",
    "callees":[
      { "tag":"ds_VirtualAlloc" }
    ],
    "blocks":[
      {
        "tag":"sub_100036F5",
        "label":"sub_100036F5",
        "out_true":"loc_10003707",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    ecx" },
          { "str":"mov     ecx, [ebp+arg_0]" },
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"mov     esi, [ecx+10h]" },
          { "str":"mov     eax, [ecx+8]" },
          { "str":"xor     ebx, ebx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003707",
        "label":"loc_10003707",
        "out_true":"loc_10003710",
        "out_false":"label_366",
        "last_inst":"jl",
        "instructions":[
          { "str":"test    eax, eax" },
          { "str":"jl      short loc_10003710" }
        ],
        "callees":[]
      },
{
        "tag":"label_366",
        "label":"label_366",
        "out_true":"loc_10003707",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"shl     eax, 1" },
          { "str":"inc     ebx" },
          { "str":"jmp     short loc_10003707" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003710",
        "label":"loc_10003710",
        "out_true":"loc_10003725",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, ebx" },
          { "str":"push    3Fh" },
          { "str":"imul    eax, 204h" },
          { "str":"pop     edx" },
          { "str":"lea     eax, [eax+esi+144h]" },
          { "str":"mov     [ebp+var_4], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003725",
        "label":"loc_10003725",
        "out_true":"loc_10003725",
        "out_false":"label_367",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     [eax+8], eax" },
          { "str":"mov     [eax+4], eax" },
          { "str":"add     eax, 8" },
          { "str":"dec     edx" },
          { "str":"jnz     short loc_10003725" }
        ],
        "callees":[]
      },
{
        "tag":"label_367",
        "label":"label_367",
        "out_true":"loc_10003758",
        "out_false":"label_368",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     edi, ebx" },
          { "str":"push    4" },
          { "str":"shl     edi, 0Fh" },
          { "str":"add     edi, [ecx+0Ch]" },
          { "str":"push    1000h" },
          { "str":"push    8000h" },
          { "str":"push    edi" },
          { "str":"call    ds:VirtualAlloc" },
          { "str":"test    eax, eax" },
          { "str":"jnz     short loc_10003758" }
        ],
        "callees":[
          { "tag":"ds_VirtualAlloc" }
        ]
      },
{
        "tag":"label_368",
        "label":"label_368",
        "out_true":"loc_100037EB",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"or      eax, 0FFFFFFFFh" },
          { "str":"jmp     loc_100037EB" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003758",
        "label":"loc_10003758",
        "out_true":"loc_1000379E",
        "out_false":"label_369",
        "last_inst":"ja",
        "instructions":[
          { "str":"lea     edx, [edi+7000h]" },
          { "str":"cmp     edi, edx" },
          { "str":"ja      short loc_1000379E" }
        ],
        "callees":[]
      },
{
        "tag":"label_369",
        "label":"label_369",
        "out_true":"loc_10003765",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"lea     eax, [edi+10h]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003765",
        "label":"loc_10003765",
        "out_true":"loc_10003765",
        "out_false":"loc_1000379E",
        "last_inst":"jb",
        "instructions":[
          { "str":"or      dword ptr [eax-8], 0FFFFFFFFh" },
          { "str":"or      dword ptr [eax+0FECh], 0FFFFFFFFh" },
          { "str":"lea     ecx, [eax+0FFCh]" },
          { "str":"mov     dword ptr [eax-4], 0FF0h" },
          { "str":"mov     [eax], ecx" },
          { "str":"lea     ecx, [eax-1004h]" },
          { "str":"mov     [eax+4], ecx" },
          { "str":"mov     dword ptr [eax+0FE8h], 0FF0h" },
          { "str":"add     eax, 1000h" },
          { "str":"lea     ecx, [eax-10h]" },
          { "str":"cmp     ecx, edx" },
          { "str":"jbe     short loc_10003765" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000379E",
        "label":"loc_1000379E",
        "out_true":"loc_100037DB",
        "out_false":"label_370",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     eax, [ebp+var_4]" },
          { "str":"lea     ecx, [edi+0Ch]" },
          { "str":"add     eax, 1F8h" },
          { "str":"push    1" },
          { "str":"pop     edi" },
          { "str":"mov     [eax+4], ecx" },
          { "str":"mov     [ecx+8], eax" },
          { "str":"lea     ecx, [edx+0Ch]" },
          { "str":"mov     [eax+8], ecx" },
          { "str":"mov     [ecx+4], eax" },
          { "str":"and     dword ptr [esi+ebx*4+44h], 0" },
          { "str":"mov     [esi+ebx*4+0C4h], edi" },
          { "str":"mov     al, [esi+43h]" },
          { "str":"mov     cl, al" },
          { "str":"inc     cl" },
          { "str":"test    al, al" },
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"mov     [esi+43h], cl" },
          { "str":"jnz     short loc_100037DB" }
        ],
        "callees":[]
      },
{
        "tag":"label_370",
        "label":"label_370",
        "out_true":"loc_100037DB",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"or      [eax+4], edi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100037DB",
        "label":"loc_100037DB",
        "out_true":"loc_100037EB",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     edx, 80000000h" },
          { "str":"mov     ecx, ebx" },
          { "str":"shr     edx, cl" },
          { "str":"not     edx" },
          { "str":"and     [eax+8], edx" },
          { "str":"mov     eax, ebx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100037EB",
        "label":"loc_100037EB",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_100037F0",
    "label":"sub_100037F0",
    "type":"idapro",
    "callees":[
      { "tag":"ds_HeapAlloc" },
      { "tag":"ds_HeapFree" },
      { "tag":"ds_VirtualFree" },
      { "tag":"ebp" },
      { "tag":"sub_10003FC0" }
    ],
    "blocks":[
      {
        "tag":"sub_100037F0",
        "label":"sub_100037F0",
        "out_true":"loc_10003804",
        "out_false":"label_371",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     dword_10006350, 0FFFFFFFFh" },
          { "str":"push    ebx" },
          { "str":"push    ebp" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"jnz     short loc_10003804" }
        ],
        "callees":[]
      },
{
        "tag":"label_371",
        "label":"label_371",
        "out_true":"loc_10003821",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     esi, offset off_10006340" },
          { "str":"jmp     short loc_10003821" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003804",
        "label":"loc_10003804",
        "out_true":"loc_1000392D",
        "out_false":"loc_10003821",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    2020h" },
          { "str":"push    0" },
          { "str":"push    hHeap" },
          { "str":"call    ds:HeapAlloc" },
          { "str":"mov     esi, eax" },
          { "str":"test    esi, esi" },
          { "str":"jz      loc_1000392D" }
        ],
        "callees":[
          { "tag":"ds_HeapAlloc" }
        ]
      },
{
        "tag":"loc_10003821",
        "label":"loc_10003821",
        "out_true":"loc_10003916",
        "out_false":"label_372",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     ebp, ds:VirtualAlloc" },
          { "str":"push    4" },
          { "str":"push    2000h" },
          { "str":"push    400000h" },
          { "str":"push    0" },
          { "str":"call    ebp" },
          { "str":"mov     edi, eax" },
          { "str":"test    edi, edi" },
          { "str":"jz      loc_10003916" }
        ],
        "callees":[
          { "tag":"ebp" }
        ]
      },
{
        "tag":"label_372",
        "label":"label_372",
        "out_true":"loc_10003908",
        "out_false":"label_373",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    4" },
          { "str":"mov     ebx, 10000h" },
          { "str":"push    1000h" },
          { "str":"push    ebx" },
          { "str":"push    edi" },
          { "str":"call    ebp" },
          { "str":"test    eax, eax" },
          { "str":"jz      loc_10003908" }
        ],
        "callees":[
          { "tag":"ebp" }
        ]
      },
{
        "tag":"label_373",
        "label":"label_373",
        "out_true":"loc_10003880",
        "out_false":"label_374",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     eax, offset off_10006340" },
          { "str":"cmp     esi, eax" },
          { "str":"jnz     short loc_10003880" }
        ],
        "callees":[]
      },
{
        "tag":"label_374",
        "label":"label_374",
        "out_true":"loc_10003870",
        "out_false":"label_375",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     off_10006340, 0" },
          { "str":"jnz     short loc_10003870" }
        ],
        "callees":[]
      },
{
        "tag":"label_375",
        "label":"label_375",
        "out_true":"loc_10003870",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     off_10006340, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003870",
        "label":"loc_10003870",
        "out_true":"loc_10003895",
        "out_false":"label_376",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     off_10006344, 0" },
          { "str":"jnz     short loc_10003895" }
        ],
        "callees":[]
      },
{
        "tag":"label_376",
        "label":"label_376",
        "out_true":"loc_10003895",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     off_10006344, eax" },
          { "str":"jmp     short loc_10003895" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003880",
        "label":"loc_10003880",
        "out_true":"loc_10003895",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     [esi], eax" },
          { "str":"mov     eax, off_10006344" },
          { "str":"mov     [esi+4], eax" },
          { "str":"mov     off_10006344, esi" },
          { "str":"mov     eax, [esi+4]" },
          { "str":"mov     [eax], esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003895",
        "label":"loc_10003895",
        "out_true":"loc_100038B7",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"lea     eax, [edi+400000h]" },
          { "str":"lea     ecx, [esi+98h]" },
          { "str":"mov     [esi+14h], eax" },
          { "str":"lea     eax, [esi+18h]" },
          { "str":"mov     [esi+0Ch], ecx" },
          { "str":"mov     [esi+10h], edi" },
          { "str":"mov     [esi+8], eax" },
          { "str":"xor     ebp, ebp" },
          { "str":"mov     ecx, 0F1h" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100038B7",
        "label":"loc_100038B7",
        "out_true":"loc_100038B7",
        "out_false":"label_377",
        "last_inst":"jl",
        "instructions":[
          { "str":"xor     edx, edx" },
          { "str":"cmp     ebp, 10h" },
          { "str":"setnl   dl" },
          { "str":"dec     edx" },
          { "str":"and     edx, ecx" },
          { "str":"dec     edx" },
          { "str":"inc     ebp" },
          { "str":"mov     [eax], edx" },
          { "str":"mov     [eax+4], ecx" },
          { "str":"add     eax, 8" },
          { "str":"cmp     ebp, 400h" },
          { "str":"jl      short loc_100038B7" }
        ],
        "callees":[]
      },
{
        "tag":"label_377",
        "label":"label_377",
        "out_true":"loc_100038E0",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"push    0" },
          { "str":"push    edi" },
          { "str":"call    sub_10003FC0" },
          { "str":"add     esp, 0Ch" }
        ],
        "callees":[
          { "tag":"sub_10003FC0" }
        ]
      },
{
        "tag":"loc_100038E0",
        "label":"loc_100038E0",
        "out_true":"loc_10003904",
        "out_false":"label_378",
        "last_inst":"jnb",
        "instructions":[
          { "str":"mov     eax, [esi+10h]" },
          { "str":"add     eax, ebx" },
          { "str":"cmp     edi, eax" },
          { "str":"jnb     short loc_10003904" }
        ],
        "callees":[]
      },
{
        "tag":"label_378",
        "label":"label_378",
        "out_true":"loc_100038E0",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"or      byte ptr [edi+0F8h], 0FFh" },
          { "str":"lea     eax, [edi+8]" },
          { "str":"mov     [edi], eax" },
          { "str":"mov     dword ptr [edi+4], 0F0h" },
          { "str":"add     edi, 1000h" },
          { "str":"jmp     short loc_100038E0" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003904",
        "label":"loc_10003904",
        "out_true":"loc_1000392F",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     eax, esi" },
          { "str":"jmp     short loc_1000392F" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003908",
        "label":"loc_10003908",
        "out_true":"loc_10003916",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    8000h" },
          { "str":"push    0" },
          { "str":"push    edi" },
          { "str":"call    ds:VirtualFree" }
        ],
        "callees":[
          { "tag":"ds_VirtualFree" }
        ]
      },
{
        "tag":"loc_10003916",
        "label":"loc_10003916",
        "out_true":"loc_1000392D",
        "out_false":"label_379",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     esi, offset off_10006340" },
          { "str":"jz      short loc_1000392D" }
        ],
        "callees":[]
      },
{
        "tag":"label_379",
        "label":"label_379",
        "out_true":"loc_1000392D",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    esi" },
          { "str":"push    0" },
          { "str":"push    hHeap" },
          { "str":"call    ds:HeapFree" }
        ],
        "callees":[
          { "tag":"ds_HeapFree" }
        ]
      },
{
        "tag":"loc_1000392D",
        "label":"loc_1000392D",
        "out_true":"loc_1000392F",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     eax, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000392F",
        "label":"loc_1000392F",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebp" },
          { "str":"pop     ebx" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10003934",
    "label":"sub_10003934",
    "type":"idapro",
    "callees":[
      { "tag":"ds_HeapFree" },
      { "tag":"ds_VirtualFree" }
    ],
    "blocks":[
      {
        "tag":"sub_10003934",
        "label":"sub_10003934",
        "out_true":"loc_10003959",
        "out_false":"label_380",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    esi" },
          { "str":"mov     esi, [esp+4+lpMem]" },
          { "str":"push    8000h" },
          { "str":"push    0" },
          { "str":"push    dword ptr [esi+10h]" },
          { "str":"call    ds:VirtualFree" },
          { "str":"cmp     off_10008360, esi" },
          { "str":"jnz     short loc_10003959" }
        ],
        "callees":[
          { "tag":"ds_VirtualFree" }
        ]
      },
{
        "tag":"label_380",
        "label":"label_380",
        "out_true":"loc_10003959",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+4]" },
          { "str":"mov     off_10008360, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003959",
        "label":"loc_10003959",
        "out_true":"loc_10003981",
        "out_false":"label_381",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     esi, offset off_10006340" },
          { "str":"jz      short loc_10003981" }
        ],
        "callees":[]
      },
{
        "tag":"label_381",
        "label":"label_381",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, [esi+4]" },
          { "str":"mov     ecx, [esi]" },
          { "str":"push    esi" },
          { "str":"push    0" },
          { "str":"mov     [eax], ecx" },
          { "str":"mov     eax, [esi]" },
          { "str":"mov     ecx, [esi+4]" },
          { "str":"mov     [eax+4], ecx" },
          { "str":"push    hHeap" },
          { "str":"call    ds:HeapFree" },
          { "str":"pop     esi" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"ds_HeapFree" }
        ]
      },
{
        "tag":"loc_10003981",
        "label":"loc_10003981",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"or      dword_10006350, 0FFFFFFFFh" },
          { "str":"pop     esi" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_1000398A",
    "label":"sub_1000398A",
    "type":"idapro",
    "callees":[
      { "tag":"ds_VirtualFree" },
      { "tag":"sub_10003934" }
    ],
    "blocks":[
      {
        "tag":"sub_1000398A",
        "label":"sub_1000398A",
        "out_true":"loc_10003997",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    ecx" },
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"mov     esi, off_10006344" },
          { "str":"push    edi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003997",
        "label":"loc_10003997",
        "out_true":"loc_10003A35",
        "out_false":"label_382",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     dword ptr [esi+10h], 0FFFFFFFFh" },
          { "str":"jz      loc_10003A35" }
        ],
        "callees":[]
      },
{
        "tag":"label_382",
        "label":"label_382",
        "out_true":"loc_100039B0",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"and     [ebp+var_4], 0" },
          { "str":"lea     edi, [esi+2010h]" },
          { "str":"mov     ebx, 3FF000h" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100039B0",
        "label":"loc_100039B0",
        "out_true":"loc_100039F1",
        "out_false":"label_383",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     dword ptr [edi], 0F0h" },
          { "str":"jnz     short loc_100039F1" }
        ],
        "callees":[]
      },
{
        "tag":"label_383",
        "label":"label_383",
        "out_true":"loc_100039F1",
        "out_false":"label_384",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, ebx" },
          { "str":"push    4000h" },
          { "str":"add     eax, [esi+10h]" },
          { "str":"push    1000h" },
          { "str":"push    eax" },
          { "str":"call    ds:VirtualFree" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_100039F1" }
        ],
        "callees":[
          { "tag":"ds_VirtualFree" }
        ]
      },
{
        "tag":"label_384",
        "label":"label_384",
        "out_true":"loc_100039E6",
        "out_false":"label_385",
        "last_inst":"jz",
        "instructions":[
          { "str":"or      dword ptr [edi], 0FFFFFFFFh" },
          { "str":"dec     dword_10008C04" },
          { "str":"mov     eax, [esi+0Ch]" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_100039E6" }
        ],
        "callees":[]
      },
{
        "tag":"label_385",
        "label":"label_385",
        "out_true":"loc_100039E9",
        "out_false":"loc_100039E6",
        "last_inst":"jb",
        "instructions":[
          { "str":"cmp     eax, edi" },
          { "str":"jbe     short loc_100039E9" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100039E6",
        "label":"loc_100039E6",
        "out_true":"loc_100039E9",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     [esi+0Ch], edi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100039E9",
        "label":"loc_100039E9",
        "out_true":"loc_100039FE",
        "out_false":"loc_100039F1",
        "last_inst":"jz",
        "instructions":[
          { "str":"inc     [ebp+var_4]" },
          { "str":"dec     [ebp+arg_0]" },
          { "str":"jz      short loc_100039FE" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100039F1",
        "label":"loc_100039F1",
        "out_true":"loc_100039B0",
        "out_false":"loc_100039FE",
        "last_inst":"jg",
        "instructions":[
          { "str":"sub     ebx, 1000h" },
          { "str":"sub     edi, 8" },
          { "str":"test    ebx, ebx" },
          { "str":"jge     short loc_100039B0" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100039FE",
        "label":"loc_100039FE",
        "out_true":"loc_10003A35",
        "out_false":"label_386",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     [ebp+var_4], 0" },
          { "str":"mov     ecx, esi" },
          { "str":"mov     esi, [esi+4]" },
          { "str":"jz      short loc_10003A35" }
        ],
        "callees":[]
      },
{
        "tag":"label_386",
        "label":"label_386",
        "out_true":"loc_10003A35",
        "out_false":"label_387",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     dword ptr [ecx+18h], 0FFFFFFFFh" },
          { "str":"jnz     short loc_10003A35" }
        ],
        "callees":[]
      },
{
        "tag":"label_387",
        "label":"label_387",
        "out_true":"loc_10003A15",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    1" },
          { "str":"lea     eax, [ecx+20h]" },
          { "str":"pop     edx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003A15",
        "label":"loc_10003A15",
        "out_true":"loc_10003A26",
        "out_false":"label_388",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     dword ptr [eax], 0FFFFFFFFh" },
          { "str":"jnz     short loc_10003A26" }
        ],
        "callees":[]
      },
{
        "tag":"label_388",
        "label":"label_388",
        "out_true":"loc_10003A15",
        "out_false":"loc_10003A26",
        "last_inst":"jl",
        "instructions":[
          { "str":"inc     edx" },
          { "str":"add     eax, 8" },
          { "str":"cmp     edx, 400h" },
          { "str":"jl      short loc_10003A15" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003A26",
        "label":"loc_10003A26",
        "out_true":"loc_10003A35",
        "out_false":"label_389",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     edx, 400h" },
          { "str":"jnz     short loc_10003A35" }
        ],
        "callees":[]
      },
{
        "tag":"label_389",
        "label":"label_389",
        "out_true":"loc_10003A35",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ecx" },
          { "str":"call    sub_10003934" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_10003934" }
        ]
      },
{
        "tag":"loc_10003A35",
        "label":"loc_10003A35",
        "out_true":"loc_10003A47",
        "out_false":"label_390",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     esi, off_10006344" },
          { "str":"jz      short loc_10003A47" }
        ],
        "callees":[]
      },
{
        "tag":"label_390",
        "label":"label_390",
        "out_true":"loc_10003997",
        "out_false":"loc_10003A47",
        "last_inst":"jg",
        "instructions":[
          { "str":"cmp     [ebp+arg_0], 0" },
          { "str":"jg      loc_10003997" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003A47",
        "label":"loc_10003A47",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10003A4C",
    "label":"sub_10003A4C",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_10003A4C",
        "label":"sub_10003A4C",
        "out_true":"loc_10003A58",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esp+arg_0]" },
          { "str":"mov     edx, offset off_10006340" },
          { "str":"push    esi" },
          { "str":"mov     ecx, edx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003A58",
        "label":"loc_10003A58",
        "out_true":"loc_10003A62",
        "out_false":"label_391",
        "last_inst":"jb",
        "instructions":[
          { "str":"cmp     eax, [ecx+10h]" },
          { "str":"jbe     short loc_10003A62" }
        ],
        "callees":[]
      },
{
        "tag":"label_391",
        "label":"label_391",
        "out_true":"loc_10003A6A",
        "out_false":"loc_10003A62",
        "last_inst":"jb",
        "instructions":[
          { "str":"cmp     eax, [ecx+14h]" },
          { "str":"jb      short loc_10003A6A" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003A62",
        "label":"loc_10003A62",
        "out_true":"loc_10003A9F",
        "out_false":"label_392",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     ecx, [ecx]" },
          { "str":"cmp     ecx, edx" },
          { "str":"jz      short loc_10003A9F" }
        ],
        "callees":[]
      },
{
        "tag":"label_392",
        "label":"label_392",
        "out_true":"loc_10003A58",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     short loc_10003A58" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003A6A",
        "label":"loc_10003A6A",
        "out_true":"loc_10003A9F",
        "out_false":"label_393",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    al, 0Fh" },
          { "str":"jnz     short loc_10003A9F" }
        ],
        "callees":[]
      },
{
        "tag":"label_393",
        "label":"label_393",
        "out_true":"loc_10003A9F",
        "out_false":"label_394",
        "last_inst":"jb",
        "instructions":[
          { "str":"mov     esi, eax" },
          { "str":"mov     edx, 100h" },
          { "str":"and     esi, 0FFFh" },
          { "str":"cmp     esi, edx" },
          { "str":"jb      short loc_10003A9F" }
        ],
        "callees":[]
      },
{
        "tag":"label_394",
        "label":"label_394",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     esi, [esp+4+arg_4]" },
          { "str":"mov     [esi], ecx" },
          { "str":"mov     esi, [esp+4+arg_8]" },
          { "str":"mov     ecx, eax" },
          { "str":"and     cx, 0F000h" },
          { "str":"sub     eax, ecx" },
          { "str":"mov     [esi], ecx" },
          { "str":"sub     eax, edx" },
          { "str":"pop     esi" },
          { "str":"sar     eax, 4" },
          { "str":"lea     eax, [eax+ecx+8]" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003A9F",
        "label":"loc_10003A9F",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"xor     eax, eax" },
          { "str":"pop     esi" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10003AA3",
    "label":"sub_10003AA3",
    "type":"idapro",
    "callees":[
      { "tag":"sub_1000398A" }
    ],
    "blocks":[
      {
        "tag":"sub_10003AA3",
        "label":"sub_10003AA3",
        "out_true":"locret_10003AE7",
        "out_false":"label_395",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     eax, [esp+arg_0]" },
          { "str":"mov     ecx, [esp+arg_4]" },
          { "str":"sub     ecx, [eax+10h]" },
          { "str":"sar     ecx, 0Ch" },
          { "str":"lea     eax, [eax+ecx*8+18h]" },
          { "str":"mov     ecx, [esp+arg_8]" },
          { "str":"movzx   edx, byte ptr [ecx]" },
          { "str":"add     [eax], edx" },
          { "str":"and     byte ptr [ecx], 0" },
          { "str":"cmp     dword ptr [eax], 0F0h" },
          { "str":"mov     dword ptr [eax+4], 0F1h" },
          { "str":"jnz     short locret_10003AE7" }
        ],
        "callees":[]
      },
{
        "tag":"label_395",
        "label":"label_395",
        "out_true":"locret_10003AE7",
        "out_false":"label_396",
        "last_inst":"jnz",
        "instructions":[
          { "str":"inc     dword_10008C04" },
          { "str":"cmp     dword_10008C04, 20h" },
          { "str":"jnz     short locret_10003AE7" }
        ],
        "callees":[]
      },
{
        "tag":"label_396",
        "label":"label_396",
        "out_true":"locret_10003AE7",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    10h" },
          { "str":"call    sub_1000398A" },
          { "str":"pop     ecx" }
        ],
        "callees":[
          { "tag":"sub_1000398A" }
        ]
      },
{
        "tag":"locret_10003AE7",
        "label":"locret_10003AE7",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10003AE8",
    "label":"sub_10003AE8",
    "type":"idapro",
    "callees":[
      { "tag":"ds_VirtualAlloc" },
      { "tag":"sub_100037F0" },
      { "tag":"sub_10003CF0" },
      { "tag":"sub_10003FC0" }
    ],
    "blocks":[
      {
        "tag":"sub_10003AE8",
        "label":"sub_10003AE8",
        "out_true":"loc_10003AF6",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    ecx" },
          { "str":"push    ecx" },
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"mov     esi, off_10008360" },
          { "str":"push    edi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003AF6",
        "label":"loc_10003AF6",
        "out_true":"loc_10003BA1",
        "out_false":"label_397",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     edx, [esi+10h]" },
          { "str":"cmp     edx, 0FFFFFFFFh" },
          { "str":"jz      loc_10003BA1" }
        ],
        "callees":[]
      },
{
        "tag":"label_397",
        "label":"label_397",
        "out_true":"loc_10003B5B",
        "out_false":"loc_10003B21",
        "last_inst":"jnb",
        "instructions":[
          { "str":"mov     edi, [esi+8]" },
          { "str":"lea     ecx, [esi+2018h]" },
          { "str":"mov     eax, edi" },
          { "str":"sub     eax, esi" },
          { "str":"sub     eax, 18h" },
          { "str":"sar     eax, 3" },
          { "str":"shl     eax, 0Ch" },
          { "str":"add     eax, edx" },
          { "str":"cmp     edi, ecx" },
          { "str":"mov     [ebp+var_4], eax" },
          { "str":"jnb     short loc_10003B5B" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003B21",
        "label":"loc_10003B21",
        "out_true":"loc_10003B44",
        "out_false":"label_398",
        "last_inst":"jl",
        "instructions":[
          { "str":"mov     ecx, [edi]" },
          { "str":"mov     ebx, [ebp+arg_0]" },
          { "str":"cmp     ecx, ebx" },
          { "str":"jl      short loc_10003B44" }
        ],
        "callees":[]
      },
{
        "tag":"label_398",
        "label":"label_398",
        "out_true":"loc_10003B44",
        "out_false":"label_399",
        "last_inst":"jb",
        "instructions":[
          { "str":"cmp     [edi+4], ebx" },
          { "str":"jbe     short loc_10003B44" }
        ],
        "callees":[]
      },
{
        "tag":"label_399",
        "label":"label_399",
        "out_true":"loc_10003BB3",
        "out_false":"label_400",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"push    ecx" },
          { "str":"push    eax" },
          { "str":"call    sub_10003CF0" },
          { "str":"add     esp, 0Ch" },
          { "str":"test    eax, eax" },
          { "str":"jnz     short loc_10003BB3" }
        ],
        "callees":[
          { "tag":"sub_10003CF0" }
        ]
      },
{
        "tag":"label_400",
        "label":"label_400",
        "out_true":"loc_10003B44",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [ebp+var_4]" },
          { "str":"mov     [edi+4], ebx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003B44",
        "label":"loc_10003B44",
        "out_true":"loc_10003B21",
        "out_false":"label_401",
        "last_inst":"jb",
        "instructions":[
          { "str":"add     edi, 8" },
          { "str":"lea     ecx, [esi+2018h]" },
          { "str":"add     eax, 1000h" },
          { "str":"cmp     edi, ecx" },
          { "str":"mov     [ebp+var_4], eax" },
          { "str":"jb      short loc_10003B21" }
        ],
        "callees":[]
      },
{
        "tag":"label_401",
        "label":"label_401",
        "out_true":"loc_10003B5E",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     short loc_10003B5E" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003B5B",
        "label":"loc_10003B5B",
        "out_true":"loc_10003B5E",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ebx, [ebp+arg_0]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003B5E",
        "label":"loc_10003B5E",
        "out_true":"loc_10003BA4",
        "out_false":"loc_10003B71",
        "last_inst":"jnb",
        "instructions":[
          { "str":"mov     eax, [esi+8]" },
          { "str":"mov     ecx, [esi+10h]" },
          { "str":"lea     edi, [esi+18h]" },
          { "str":"mov     [ebp+var_8], eax" },
          { "str":"cmp     edi, eax" },
          { "str":"mov     [ebp+var_4], ecx" },
          { "str":"jnb     short loc_10003BA4" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003B71",
        "label":"loc_10003B71",
        "out_true":"loc_10003B90",
        "out_false":"label_402",
        "last_inst":"jl",
        "instructions":[
          { "str":"mov     eax, [edi]" },
          { "str":"cmp     eax, ebx" },
          { "str":"jl      short loc_10003B90" }
        ],
        "callees":[]
      },
{
        "tag":"label_402",
        "label":"label_402",
        "out_true":"loc_10003B90",
        "out_false":"label_403",
        "last_inst":"jb",
        "instructions":[
          { "str":"cmp     [edi+4], ebx" },
          { "str":"jbe     short loc_10003B90" }
        ],
        "callees":[]
      },
{
        "tag":"label_403",
        "label":"label_403",
        "out_true":"loc_10003BB3",
        "out_false":"label_404",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"push    eax" },
          { "str":"push    [ebp+var_4]" },
          { "str":"call    sub_10003CF0" },
          { "str":"add     esp, 0Ch" },
          { "str":"test    eax, eax" },
          { "str":"jnz     short loc_10003BB3" }
        ],
        "callees":[
          { "tag":"sub_10003CF0" }
        ]
      },
{
        "tag":"label_404",
        "label":"label_404",
        "out_true":"loc_10003B90",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     [edi+4], ebx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003B90",
        "label":"loc_10003B90",
        "out_true":"loc_10003B71",
        "out_false":"label_405",
        "last_inst":"jb",
        "instructions":[
          { "str":"add     [ebp+var_4], 1000h" },
          { "str":"add     edi, 8" },
          { "str":"cmp     edi, [ebp+var_8]" },
          { "str":"jb      short loc_10003B71" }
        ],
        "callees":[]
      },
{
        "tag":"label_405",
        "label":"label_405",
        "out_true":"loc_10003BA4",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     short loc_10003BA4" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003BA1",
        "label":"loc_10003BA1",
        "out_true":"loc_10003BA4",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ebx, [ebp+arg_0]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003BA4",
        "label":"loc_10003BA4",
        "out_true":"loc_10003BC3",
        "out_false":"label_406",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     esi, [esi]" },
          { "str":"cmp     esi, off_10008360" },
          { "str":"jz      short loc_10003BC3" }
        ],
        "callees":[]
      },
{
        "tag":"label_406",
        "label":"label_406",
        "out_true":"loc_10003AF6",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     loc_10003AF6" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003BB3",
        "label":"loc_10003BB3",
        "out_true":"loc_10003CEB",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     off_10008360, esi" },
          { "str":"sub     [edi], ebx" },
          { "str":"mov     [esi+8], edi" },
          { "str":"jmp     loc_10003CEB" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003BC3",
        "label":"loc_10003BC3",
        "out_true":"loc_10003BCA",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, offset off_10006340" },
          { "str":"mov     edi, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003BCA",
        "label":"loc_10003BCA",
        "out_true":"loc_10003BD6",
        "out_false":"label_407",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     dword ptr [edi+10h], 0FFFFFFFFh" },
          { "str":"jz      short loc_10003BD6" }
        ],
        "callees":[]
      },
{
        "tag":"label_407",
        "label":"label_407",
        "out_true":"loc_10003BE2",
        "out_false":"loc_10003BD6",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     dword ptr [edi+0Ch], 0" },
          { "str":"jnz     short loc_10003BE2" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003BD6",
        "label":"loc_10003BD6",
        "out_true":"loc_10003CB7",
        "out_false":"label_408",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     edi, [edi]" },
          { "str":"cmp     edi, eax" },
          { "str":"jz      loc_10003CB7" }
        ],
        "callees":[]
      },
{
        "tag":"label_408",
        "label":"label_408",
        "out_true":"loc_10003BCA",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     short loc_10003BCA" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003BE2",
        "label":"loc_10003BE2",
        "out_true":"loc_10003C11",
        "out_false":"loc_10003C00",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ebx, [edi+0Ch]" },
          { "str":"and     [ebp+var_4], 0" },
          { "str":"mov     esi, ebx" },
          { "str":"mov     eax, ebx" },
          { "str":"sub     esi, edi" },
          { "str":"sub     esi, 18h" },
          { "str":"sar     esi, 3" },
          { "str":"shl     esi, 0Ch" },
          { "str":"add     esi, [edi+10h]" },
          { "str":"cmp     dword ptr [ebx], 0FFFFFFFFh" },
          { "str":"jnz     short loc_10003C11" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003C00",
        "label":"loc_10003C00",
        "out_true":"loc_10003C11",
        "out_false":"label_409",
        "last_inst":"jg",
        "instructions":[
          { "str":"cmp     [ebp+var_4], 10h" },
          { "str":"jge     short loc_10003C11" }
        ],
        "callees":[]
      },
{
        "tag":"label_409",
        "label":"label_409",
        "out_true":"loc_10003C00",
        "out_false":"loc_10003C11",
        "last_inst":"jz",
        "instructions":[
          { "str":"add     eax, 8" },
          { "str":"inc     [ebp+var_4]" },
          { "str":"cmp     dword ptr [eax], 0FFFFFFFFh" },
          { "str":"jz      short loc_10003C00" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003C11",
        "label":"loc_10003C11",
        "out_true":"loc_10003CE9",
        "out_false":"label_410",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     eax, [ebp+var_4]" },
          { "str":"push    4" },
          { "str":"shl     eax, 0Ch" },
          { "str":"push    1000h" },
          { "str":"push    eax" },
          { "str":"push    esi" },
          { "str":"mov     [ebp+var_8], eax" },
          { "str":"call    ds:VirtualAlloc" },
          { "str":"cmp     eax, esi" },
          { "str":"jnz     loc_10003CE9" }
        ],
        "callees":[
          { "tag":"ds_VirtualAlloc" }
        ]
      },
{
        "tag":"label_410",
        "label":"label_410",
        "out_true":"loc_10003C78",
        "out_false":"label_411",
        "last_inst":"jl",
        "instructions":[
          { "str":"push    0" },
          { "str":"push    [ebp+var_8]" },
          { "str":"push    esi" },
          { "str":"call    sub_10003FC0" },
          { "str":"mov     edx, [ebp+var_4]" },
          { "str":"add     esp, 0Ch" },
          { "str":"test    edx, edx" },
          { "str":"mov     ecx, ebx" },
          { "str":"jle     short loc_10003C78" }
        ],
        "callees":[
          { "tag":"sub_10003FC0" }
        ]
      },
{
        "tag":"label_411",
        "label":"label_411",
        "out_true":"loc_10003C4E",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"lea     eax, [esi+4]" },
          { "str":"mov     [ebp+var_4], edx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003C4E",
        "label":"loc_10003C4E",
        "out_true":"loc_10003C4E",
        "out_false":"loc_10003C78",
        "last_inst":"jnz",
        "instructions":[
          { "str":"or      byte ptr [eax+0F4h], 0FFh" },
          { "str":"lea     edx, [eax+4]" },
          { "str":"mov     [eax-4], edx" },
          { "str":"mov     edx, 0F0h" },
          { "str":"mov     [eax], edx" },
          { "str":"mov     [ecx], edx" },
          { "str":"mov     dword ptr [ecx+4], 0F1h" },
          { "str":"add     eax, 1000h" },
          { "str":"add     ecx, 8" },
          { "str":"dec     [ebp+var_4]" },
          { "str":"jnz     short loc_10003C4E" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003C78",
        "label":"loc_10003C78",
        "out_true":"loc_10003C84",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     off_10008360, edi" },
          { "str":"lea     eax, [edi+2018h]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003C84",
        "label":"loc_10003C84",
        "out_true":"loc_10003C94",
        "out_false":"label_412",
        "last_inst":"jnb",
        "instructions":[
          { "str":"cmp     ecx, eax" },
          { "str":"jnb     short loc_10003C94" }
        ],
        "callees":[]
      },
{
        "tag":"label_412",
        "label":"label_412",
        "out_true":"loc_10003C92",
        "out_false":"label_413",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     dword ptr [ecx], 0FFFFFFFFh" },
          { "str":"jz      short loc_10003C92" }
        ],
        "callees":[]
      },
{
        "tag":"label_413",
        "label":"label_413",
        "out_true":"loc_10003C84",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"add     ecx, 8" },
          { "str":"jmp     short loc_10003C84" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003C92",
        "label":"loc_10003C92",
        "out_true":"loc_10003C94",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"cmp     ecx, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003C94",
        "label":"loc_10003C94",
        "out_true":"loc_10003CEB",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"sbb     eax, eax" },
          { "str":"and     eax, ecx" },
          { "str":"mov     [edi+0Ch], eax" },
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"mov     [esi+8], al" },
          { "str":"mov     [edi+8], ebx" },
          { "str":"sub     [ebx], eax" },
          { "str":"sub     [esi+4], eax" },
          { "str":"lea     ecx, [esi+eax+8]" },
          { "str":"lea     eax, [esi+100h]" },
          { "str":"mov     [esi], ecx" },
          { "str":"jmp     short loc_10003CEB" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003CB7",
        "label":"loc_10003CB7",
        "out_true":"loc_10003CE9",
        "out_false":"label_414",
        "last_inst":"jz",
        "instructions":[
          { "str":"call    sub_100037F0" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10003CE9" }
        ],
        "callees":[
          { "tag":"sub_100037F0" }
        ]
      },
{
        "tag":"label_414",
        "label":"label_414",
        "out_true":"loc_10003CEB",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     ecx, [eax+10h]" },
          { "str":"mov     [ecx+8], bl" },
          { "str":"lea     edx, [ecx+ebx+8]" },
          { "str":"mov     off_10008360, eax" },
          { "str":"mov     [ecx], edx" },
          { "str":"mov     edx, 0F0h" },
          { "str":"sub     edx, ebx" },
          { "str":"mov     [ecx+4], edx" },
          { "str":"movzx   edx, bl" },
          { "str":"sub     [eax+18h], edx" },
          { "str":"lea     eax, [ecx+100h]" },
          { "str":"jmp     short loc_10003CEB" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003CE9",
        "label":"loc_10003CE9",
        "out_true":"loc_10003CEB",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     eax, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003CEB",
        "label":"loc_10003CEB",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10003CF0",
    "label":"sub_10003CF0",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_10003CF0",
        "label":"sub_10003CF0",
        "out_true":"loc_10003D35",
        "out_false":"label_415",
        "last_inst":"jb",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    ecx" },
          { "str":"mov     ecx, [ebp+arg_0]" },
          { "str":"mov     edx, [ebp+arg_8]" },
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"mov     esi, [ecx+4]" },
          { "str":"push    edi" },
          { "str":"mov     edi, [ecx]" },
          { "str":"lea     ebx, [ecx+0F8h]" },
          { "str":"cmp     esi, edx" },
          { "str":"mov     [ebp+var_4], edi" },
          { "str":"mov     eax, edi" },
          { "str":"mov     [ebp+arg_0], ebx" },
          { "str":"jb      short loc_10003D35" }
        ],
        "callees":[]
      },
{
        "tag":"label_415",
        "label":"label_415",
        "out_true":"loc_10003D24",
        "out_false":"label_416",
        "last_inst":"jnb",
        "instructions":[
          { "str":"lea     eax, [edi+edx]" },
          { "str":"mov     [edi], dl" },
          { "str":"cmp     eax, ebx" },
          { "str":"jnb     short loc_10003D24" }
        ],
        "callees":[]
      },
{
        "tag":"label_416",
        "label":"label_416",
        "out_true":"loc_10003D2D",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"add     [ecx], edx" },
          { "str":"sub     [ecx+4], edx" },
          { "str":"jmp     short loc_10003D2D" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003D24",
        "label":"loc_10003D24",
        "out_true":"loc_10003D2D",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"and     dword ptr [ecx+4], 0" },
          { "str":"lea     eax, [ecx+8]" },
          { "str":"mov     [ecx], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003D2D",
        "label":"loc_10003D2D",
        "out_true":"loc_10003E03",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"lea     eax, [edi+8]" },
          { "str":"jmp     loc_10003E03" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003D35",
        "label":"loc_10003D35",
        "out_true":"loc_10003D3E",
        "out_false":"label_417",
        "last_inst":"jz",
        "instructions":[
          { "str":"add     esi, edi" },
          { "str":"cmp     byte ptr [esi], 0" },
          { "str":"jz      short loc_10003D3E" }
        ],
        "callees":[]
      },
{
        "tag":"label_417",
        "label":"label_417",
        "out_true":"loc_10003D3E",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003D3E",
        "label":"loc_10003D3E",
        "out_true":"loc_10003D88",
        "out_false":"loc_10003D45",
        "last_inst":"jnb",
        "instructions":[
          { "str":"lea     esi, [eax+edx]" },
          { "str":"cmp     esi, ebx" },
          { "str":"jnb     short loc_10003D88" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003D45",
        "label":"loc_10003D45",
        "out_true":"loc_10003D7B",
        "out_false":"label_418",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     bl, [eax]" },
          { "str":"test    bl, bl" },
          { "str":"jnz     short loc_10003D7B" }
        ],
        "callees":[]
      },
{
        "tag":"label_418",
        "label":"label_418",
        "out_true":"loc_10003D51",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    1" },
          { "str":"lea     ebx, [eax+1]" },
          { "str":"pop     esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003D51",
        "label":"loc_10003D51",
        "out_true":"loc_10003D5A",
        "out_false":"label_419",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     byte ptr [ebx], 0" },
          { "str":"jnz     short loc_10003D5A" }
        ],
        "callees":[]
      },
{
        "tag":"label_419",
        "label":"label_419",
        "out_true":"loc_10003D51",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"inc     ebx" },
          { "str":"inc     esi" },
          { "str":"jmp     short loc_10003D51" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003D5A",
        "label":"loc_10003D5A",
        "out_true":"loc_10003DAC",
        "out_false":"label_420",
        "last_inst":"jnb",
        "instructions":[
          { "str":"cmp     esi, edx" },
          { "str":"jnb     short loc_10003DAC" }
        ],
        "callees":[]
      },
{
        "tag":"label_420",
        "label":"label_420",
        "out_true":"loc_10003D68",
        "out_false":"label_421",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     eax, [ebp+var_4]" },
          { "str":"jnz     short loc_10003D68" }
        ],
        "callees":[]
      },
{
        "tag":"label_421",
        "label":"label_421",
        "out_true":"loc_10003D74",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     [ecx+4], esi" },
          { "str":"jmp     short loc_10003D74" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003D68",
        "label":"loc_10003D68",
        "out_true":"loc_10003E0D",
        "out_false":"loc_10003D74",
        "last_inst":"jb",
        "instructions":[
          { "str":"sub     [ebp+arg_4], esi" },
          { "str":"cmp     [ebp+arg_4], edx" },
          { "str":"jb      loc_10003E0D" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003D74",
        "label":"loc_10003D74",
        "out_true":"loc_10003D80",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     edi, [ebp+var_4]" },
          { "str":"mov     eax, ebx" },
          { "str":"jmp     short loc_10003D80" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003D7B",
        "label":"loc_10003D7B",
        "out_true":"loc_10003D80",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"movzx   esi, bl" },
          { "str":"add     eax, esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003D80",
        "label":"loc_10003D80",
        "out_true":"loc_10003D45",
        "out_false":"loc_10003D88",
        "last_inst":"jb",
        "instructions":[
          { "str":"lea     esi, [eax+edx]" },
          { "str":"cmp     esi, [ebp+arg_0]" },
          { "str":"jb      short loc_10003D45" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003D88",
        "label":"loc_10003D88",
        "out_true":"loc_10003D8B",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"lea     esi, [ecx+8]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003D8B",
        "label":"loc_10003D8B",
        "out_true":"loc_10003E0D",
        "out_false":"label_422",
        "last_inst":"jnb",
        "instructions":[
          { "str":"cmp     esi, edi" },
          { "str":"jnb     short loc_10003E0D" }
        ],
        "callees":[]
      },
{
        "tag":"label_422",
        "label":"label_422",
        "out_true":"loc_10003E0D",
        "out_false":"label_423",
        "last_inst":"jnb",
        "instructions":[
          { "str":"lea     eax, [esi+edx]" },
          { "str":"cmp     eax, [ebp+arg_0]" },
          { "str":"jnb     short loc_10003E0D" }
        ],
        "callees":[]
      },
{
        "tag":"label_423",
        "label":"label_423",
        "out_true":"loc_10003DDD",
        "out_false":"label_424",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     al, [esi]" },
          { "str":"test    al, al" },
          { "str":"jnz     short loc_10003DDD" }
        ],
        "callees":[]
      },
{
        "tag":"label_424",
        "label":"label_424",
        "out_true":"loc_10003DA3",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    1" },
          { "str":"lea     ebx, [esi+1]" },
          { "str":"pop     eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003DA3",
        "label":"loc_10003DA3",
        "out_true":"loc_10003DCD",
        "out_false":"label_425",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     byte ptr [ebx], 0" },
          { "str":"jnz     short loc_10003DCD" }
        ],
        "callees":[]
      },
{
        "tag":"label_425",
        "label":"label_425",
        "out_true":"loc_10003DA3",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"inc     ebx" },
          { "str":"inc     eax" },
          { "str":"jmp     short loc_10003DA3" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003DAC",
        "label":"loc_10003DAC",
        "out_true":"loc_10003DBD",
        "out_false":"label_426",
        "last_inst":"jnb",
        "instructions":[
          { "str":"lea     ebx, [eax+edx]" },
          { "str":"cmp     ebx, [ebp+arg_0]" },
          { "str":"jnb     short loc_10003DBD" }
        ],
        "callees":[]
      },
{
        "tag":"label_426",
        "label":"label_426",
        "out_true":"loc_10003DC6",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"sub     esi, edx" },
          { "str":"mov     [ecx], ebx" },
          { "str":"mov     [ecx+4], esi" },
          { "str":"jmp     short loc_10003DC6" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003DBD",
        "label":"loc_10003DBD",
        "out_true":"loc_10003DC6",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"and     dword ptr [ecx+4], 0" },
          { "str":"lea     esi, [ecx+8]" },
          { "str":"mov     [ecx], esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003DC6",
        "label":"loc_10003DC6",
        "out_true":"loc_10003E03",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     [eax], dl" },
          { "str":"add     eax, 8" },
          { "str":"jmp     short loc_10003E03" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003DCD",
        "label":"loc_10003DCD",
        "out_true":"loc_10003DE4",
        "out_false":"label_427",
        "last_inst":"jnb",
        "instructions":[
          { "str":"cmp     eax, edx" },
          { "str":"jnb     short loc_10003DE4" }
        ],
        "callees":[]
      },
{
        "tag":"label_427",
        "label":"label_427",
        "out_true":"loc_10003E0D",
        "out_false":"label_428",
        "last_inst":"jb",
        "instructions":[
          { "str":"sub     [ebp+arg_4], eax" },
          { "str":"cmp     [ebp+arg_4], edx" },
          { "str":"jb      short loc_10003E0D" }
        ],
        "callees":[]
      },
{
        "tag":"label_428",
        "label":"label_428",
        "out_true":"loc_10003D8B",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     esi, ebx" },
          { "str":"jmp     short loc_10003D8B" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003DDD",
        "label":"loc_10003DDD",
        "out_true":"loc_10003D8B",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"movzx   eax, al" },
          { "str":"add     esi, eax" },
          { "str":"jmp     short loc_10003D8B" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003DE4",
        "label":"loc_10003DE4",
        "out_true":"loc_10003DF5",
        "out_false":"label_429",
        "last_inst":"jnb",
        "instructions":[
          { "str":"lea     ebx, [esi+edx]" },
          { "str":"cmp     ebx, [ebp+arg_0]" },
          { "str":"jnb     short loc_10003DF5" }
        ],
        "callees":[]
      },
{
        "tag":"label_429",
        "label":"label_429",
        "out_true":"loc_10003DFE",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"sub     eax, edx" },
          { "str":"mov     [ecx], ebx" },
          { "str":"mov     [ecx+4], eax" },
          { "str":"jmp     short loc_10003DFE" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003DF5",
        "label":"loc_10003DF5",
        "out_true":"loc_10003DFE",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"and     dword ptr [ecx+4], 0" },
          { "str":"lea     eax, [ecx+8]" },
          { "str":"mov     [ecx], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003DFE",
        "label":"loc_10003DFE",
        "out_true":"loc_10003E03",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     [esi], dl" },
          { "str":"lea     eax, [esi+8]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003E03",
        "label":"loc_10003E03",
        "out_true":"loc_10003E0F",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"imul    ecx, 0Fh" },
          { "str":"shl     eax, 4" },
          { "str":"sub     eax, ecx" },
          { "str":"jmp     short loc_10003E0F" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003E0D",
        "label":"loc_10003E0D",
        "out_true":"loc_10003E0F",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     eax, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003E0F",
        "label":"loc_10003E0F",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10003E14",
    "label":"sub_10003E14",
    "type":"idapro",
    "callees":[
      { "tag":"ds_LoadLibraryA" },
      { "tag":"dword_10008C08" },
      { "tag":"eax" },
      { "tag":"esi" }
    ],
    "blocks":[
      {
        "tag":"sub_10003E14",
        "label":"sub_10003E14",
        "out_true":"loc_10003E63",
        "out_false":"label_430",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"xor     ebx, ebx" },
          { "str":"cmp     dword_10008C08, ebx" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"jnz     short loc_10003E63" }
        ],
        "callees":[]
      },
{
        "tag":"label_430",
        "label":"label_430",
        "out_true":"loc_10003E99",
        "out_false":"label_431",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    offset LibFileName" },
          { "str":"call    ds:LoadLibraryA" },
          { "str":"mov     edi, eax" },
          { "str":"cmp     edi, ebx" },
          { "str":"jz      short loc_10003E99" }
        ],
        "callees":[
          { "tag":"ds_LoadLibraryA" }
        ]
      },
{
        "tag":"label_431",
        "label":"label_431",
        "out_true":"loc_10003E99",
        "out_false":"label_432",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     esi, ds:GetProcAddress" },
          { "str":"push    offset ProcName" },
          { "str":"push    edi" },
          { "str":"call    esi" },
          { "str":"test    eax, eax" },
          { "str":"mov     dword_10008C08, eax" },
          { "str":"jz      short loc_10003E99" }
        ],
        "callees":[
          { "tag":"esi" }
        ]
      },
{
        "tag":"label_432",
        "label":"label_432",
        "out_true":"loc_10003E63",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    offset aGetactivewindo" },
          { "str":"push    edi" },
          { "str":"call    esi" },
          { "str":"push    offset aGetlastactivep" },
          { "str":"push    edi" },
          { "str":"mov     dword_10008C0C, eax" },
          { "str":"call    esi" },
          { "str":"mov     dword_10008C10, eax" }
        ],
        "callees":[
          { "tag":"esi" }
        ]
      },
{
        "tag":"loc_10003E63",
        "label":"loc_10003E63",
        "out_true":"loc_10003E82",
        "out_false":"label_433",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, dword_10008C0C" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10003E82" }
        ],
        "callees":[]
      },
{
        "tag":"label_433",
        "label":"label_433",
        "out_true":"loc_10003E82",
        "out_false":"label_434",
        "last_inst":"jz",
        "instructions":[
          { "str":"call    eax" },
          { "str":"mov     ebx, eax" },
          { "str":"test    ebx, ebx" },
          { "str":"jz      short loc_10003E82" }
        ],
        "callees":[
          { "tag":"eax" }
        ]
      },
{
        "tag":"label_434",
        "label":"label_434",
        "out_true":"loc_10003E82",
        "out_false":"label_435",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, dword_10008C10" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10003E82" }
        ],
        "callees":[]
      },
{
        "tag":"label_435",
        "label":"label_435",
        "out_true":"loc_10003E82",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"call    eax" },
          { "str":"mov     ebx, eax" }
        ],
        "callees":[
          { "tag":"eax" }
        ]
      },
{
        "tag":"loc_10003E82",
        "label":"loc_10003E82",
        "out_true":"loc_10003E95",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    [esp+0Ch+arg_8]" },
          { "str":"push    [esp+10h+arg_4]" },
          { "str":"push    [esp+14h+arg_0]" },
          { "str":"push    ebx" },
          { "str":"call    dword_10008C08" }
        ],
        "callees":[
          { "tag":"dword_10008C08" }
        ]
      },
{
        "tag":"loc_10003E95",
        "label":"loc_10003E95",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003E99",
        "label":"loc_10003E99",
        "out_true":"loc_10003E95",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"xor     eax, eax" },
          { "str":"jmp     short loc_10003E95" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10003EA0",
    "label":"sub_10003EA0",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_10003EA0",
        "label":"sub_10003EA0",
        "out_true":"loc_10003F23",
        "out_false":"label_436",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     ecx, [esp+arg_8]" },
          { "str":"push    edi" },
          { "str":"test    ecx, ecx" },
          { "str":"jz      short loc_10003F23" }
        ],
        "callees":[]
      },
{
        "tag":"label_436",
        "label":"label_436",
        "out_true":"loc_10003EC4",
        "out_false":"label_437",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    esi" },
          { "str":"push    ebx" },
          { "str":"mov     ebx, ecx" },
          { "str":"mov     esi, [esp+0Ch+arg_4]" },
          { "str":"test    esi, 3" },
          { "str":"mov     edi, [esp+0Ch+arg_0]" },
          { "str":"jnz     short loc_10003EC4" }
        ],
        "callees":[]
      },
{
        "tag":"label_437",
        "label":"label_437",
        "out_true":"loc_10003F31",
        "out_false":"label_438",
        "last_inst":"jnz",
        "instructions":[
          { "str":"shr     ecx, 2" },
          { "str":"jnz     short loc_10003F31" }
        ],
        "callees":[]
      },
{
        "tag":"label_438",
        "label":"label_438",
        "out_true":"loc_10003EE5",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     short loc_10003EE5" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003EC4",
        "label":"loc_10003EC4",
        "out_true":"loc_10003EF2",
        "out_false":"label_439",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     al, [esi]" },
          { "str":"inc     esi" },
          { "str":"mov     [edi], al" },
          { "str":"inc     edi" },
          { "str":"dec     ecx" },
          { "str":"jz      short loc_10003EF2" }
        ],
        "callees":[]
      },
{
        "tag":"label_439",
        "label":"label_439",
        "out_true":"loc_10003EFA",
        "out_false":"label_440",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    al, al" },
          { "str":"jz      short loc_10003EFA" }
        ],
        "callees":[]
      },
{
        "tag":"label_440",
        "label":"label_440",
        "out_true":"loc_10003EC4",
        "out_false":"label_441",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    esi, 3" },
          { "str":"jnz     short loc_10003EC4" }
        ],
        "callees":[]
      },
{
        "tag":"label_441",
        "label":"label_441",
        "out_true":"loc_10003F31",
        "out_false":"loc_10003EE0",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ebx, ecx" },
          { "str":"shr     ecx, 2" },
          { "str":"jnz     short loc_10003F31" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003EE0",
        "label":"loc_10003EE0",
        "out_true":"loc_10003EF2",
        "out_false":"loc_10003EE5",
        "last_inst":"jz",
        "instructions":[
          { "str":"and     ebx, 3" },
          { "str":"jz      short loc_10003EF2" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003EE5",
        "label":"loc_10003EE5",
        "out_true":"loc_10003F1E",
        "out_false":"label_442",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     al, [esi]" },
          { "str":"inc     esi" },
          { "str":"mov     [edi], al" },
          { "str":"inc     edi" },
          { "str":"test    al, al" },
          { "str":"jz      short loc_10003F1E" }
        ],
        "callees":[]
      },
{
        "tag":"label_442",
        "label":"label_442",
        "out_true":"loc_10003EE5",
        "out_false":"loc_10003EF2",
        "last_inst":"jnz",
        "instructions":[
          { "str":"dec     ebx" },
          { "str":"jnz     short loc_10003EE5" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003EF2",
        "label":"loc_10003EF2",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, [esp+0Ch+arg_0]" },
          { "str":"pop     ebx" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003EFA",
        "label":"loc_10003EFA",
        "out_true":"loc_10003F14",
        "out_false":"loc_10003F02",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    edi, 3" },
          { "str":"jz      short loc_10003F14" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003F02",
        "label":"loc_10003F02",
        "out_true":"loc_10003F96",
        "out_false":"label_443",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     [edi], al" },
          { "str":"inc     edi" },
          { "str":"dec     ecx" },
          { "str":"jz      loc_10003F96" }
        ],
        "callees":[]
      },
{
        "tag":"label_443",
        "label":"label_443",
        "out_true":"loc_10003F02",
        "out_false":"loc_10003F14",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    edi, 3" },
          { "str":"jnz     short loc_10003F02" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003F14",
        "label":"loc_10003F14",
        "out_true":"loc_10003F87",
        "out_false":"loc_10003F1B",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ebx, ecx" },
          { "str":"shr     ecx, 2" },
          { "str":"jnz     short loc_10003F87" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003F1B",
        "label":"loc_10003F1B",
        "out_true":"loc_10003F1E",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     [edi], al" },
          { "str":"inc     edi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003F1E",
        "label":"loc_10003F1E",
        "out_true":"loc_10003F1B",
        "out_false":"label_444",
        "last_inst":"jnz",
        "instructions":[
          { "str":"dec     ebx" },
          { "str":"jnz     short loc_10003F1B" }
        ],
        "callees":[]
      },
{
        "tag":"label_444",
        "label":"label_444",
        "out_true":"loc_10003F23",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"pop     ebx" },
          { "str":"pop     esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003F23",
        "label":"loc_10003F23",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, [esp+4+arg_0]" },
          { "str":"pop     edi" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003F29",
        "label":"loc_10003F29",
        "out_true":"loc_10003EE0",
        "out_false":"loc_10003F31",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     [edi], edx" },
          { "str":"add     edi, 4" },
          { "str":"dec     ecx" },
          { "str":"jz      short loc_10003EE0" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003F31",
        "label":"loc_10003F31",
        "out_true":"loc_10003F29",
        "out_false":"label_445",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     edx, 7EFEFEFFh" },
          { "str":"mov     eax, [esi]" },
          { "str":"add     edx, eax" },
          { "str":"xor     eax, 0FFFFFFFFh" },
          { "str":"xor     eax, edx" },
          { "str":"mov     edx, [esi]" },
          { "str":"add     esi, 4" },
          { "str":"test    eax, 81010100h" },
          { "str":"jz      short loc_10003F29" }
        ],
        "callees":[]
      },
{
        "tag":"label_445",
        "label":"label_445",
        "out_true":"loc_10003F7B",
        "out_false":"label_446",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    dl, dl" },
          { "str":"jz      short loc_10003F7B" }
        ],
        "callees":[]
      },
{
        "tag":"label_446",
        "label":"label_446",
        "out_true":"loc_10003F71",
        "out_false":"label_447",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    dh, dh" },
          { "str":"jz      short loc_10003F71" }
        ],
        "callees":[]
      },
{
        "tag":"label_447",
        "label":"label_447",
        "out_true":"loc_10003F67",
        "out_false":"label_448",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    edx, 0FF0000h" },
          { "str":"jz      short loc_10003F67" }
        ],
        "callees":[]
      },
{
        "tag":"label_448",
        "label":"label_448",
        "out_true":"loc_10003F29",
        "out_false":"label_449",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    edx, 0FF000000h" },
          { "str":"jnz     short loc_10003F29" }
        ],
        "callees":[]
      },
{
        "tag":"label_449",
        "label":"label_449",
        "out_true":"loc_10003F7F",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     [edi], edx" },
          { "str":"jmp     short loc_10003F7F" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003F67",
        "label":"loc_10003F67",
        "out_true":"loc_10003F7F",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"and     edx, 0FFFFh" },
          { "str":"mov     [edi], edx" },
          { "str":"jmp     short loc_10003F7F" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003F71",
        "label":"loc_10003F71",
        "out_true":"loc_10003F7F",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"and     edx, 0FFh" },
          { "str":"mov     [edi], edx" },
          { "str":"jmp     short loc_10003F7F" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003F7B",
        "label":"loc_10003F7B",
        "out_true":"loc_10003F7F",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     edx, edx" },
          { "str":"mov     [edi], edx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003F7F",
        "label":"loc_10003F7F",
        "out_true":"loc_10003F91",
        "out_false":"loc_10003F87",
        "last_inst":"jz",
        "instructions":[
          { "str":"add     edi, 4" },
          { "str":"xor     eax, eax" },
          { "str":"dec     ecx" },
          { "str":"jz      short loc_10003F91" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003F87",
        "label":"loc_10003F87",
        "out_true":"loc_10003F89",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     eax, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003F89",
        "label":"loc_10003F89",
        "out_true":"loc_10003F89",
        "out_false":"loc_10003F91",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     [edi], eax" },
          { "str":"add     edi, 4" },
          { "str":"dec     ecx" },
          { "str":"jnz     short loc_10003F89" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003F91",
        "label":"loc_10003F91",
        "out_true":"loc_10003F1B",
        "out_false":"loc_10003F96",
        "last_inst":"jnz",
        "instructions":[
          { "str":"and     ebx, 3" },
          { "str":"jnz     short loc_10003F1B" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003F96",
        "label":"loc_10003F96",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, [esp+0Ch+arg_0]" },
          { "str":"pop     ebx" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10003F9E",
    "label":"sub_10003F9E",
    "type":"idapro",
    "callees":[
      { "tag":"eax" }
    ],
    "blocks":[
      {
        "tag":"sub_10003F9E",
        "label":"sub_10003F9E",
        "out_true":"loc_10003FB6",
        "out_false":"label_450",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, dword_10008C14" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10003FB6" }
        ],
        "callees":[]
      },
{
        "tag":"label_450",
        "label":"label_450",
        "out_true":"loc_10003FB6",
        "out_false":"label_451",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    [esp+arg_0]" },
          { "str":"call    eax" },
          { "str":"test    eax, eax" },
          { "str":"pop     ecx" },
          { "str":"jz      short loc_10003FB6" }
        ],
        "callees":[
          { "tag":"eax" }
        ]
      },
{
        "tag":"label_451",
        "label":"label_451",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    1" },
          { "str":"pop     eax" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003FB6",
        "label":"loc_10003FB6",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"xor     eax, eax" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10003FC0",
    "label":"sub_10003FC0",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_10003FC0",
        "label":"sub_10003FC0",
        "out_true":"loc_10004013",
        "out_false":"label_452",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     edx, [esp+arg_8]" },
          { "str":"mov     ecx, [esp+arg_0]" },
          { "str":"test    edx, edx" },
          { "str":"jz      short loc_10004013" }
        ],
        "callees":[]
      },
{
        "tag":"label_452",
        "label":"label_452",
        "out_true":"loc_10004007",
        "out_false":"label_453",
        "last_inst":"jb",
        "instructions":[
          { "str":"xor     eax, eax" },
          { "str":"mov     al, [esp+arg_4]" },
          { "str":"push    edi" },
          { "str":"mov     edi, ecx" },
          { "str":"cmp     edx, 4" },
          { "str":"jb      short loc_10004007" }
        ],
        "callees":[]
      },
{
        "tag":"label_453",
        "label":"label_453",
        "out_true":"loc_10003FE9",
        "out_false":"label_454",
        "last_inst":"jz",
        "instructions":[
          { "str":"neg     ecx" },
          { "str":"and     ecx, 3" },
          { "str":"jz      short loc_10003FE9" }
        ],
        "callees":[]
      },
{
        "tag":"label_454",
        "label":"label_454",
        "out_true":"loc_10003FE3",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"sub     edx, ecx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003FE3",
        "label":"loc_10003FE3",
        "out_true":"loc_10003FE3",
        "out_false":"loc_10003FE9",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     [edi], al" },
          { "str":"inc     edi" },
          { "str":"dec     ecx" },
          { "str":"jnz     short loc_10003FE3" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10003FE9",
        "label":"loc_10003FE9",
        "out_true":"loc_10004007",
        "out_false":"label_455",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     ecx, eax" },
          { "str":"shl     eax, 8" },
          { "str":"add     eax, ecx" },
          { "str":"mov     ecx, eax" },
          { "str":"shl     eax, 10h" },
          { "str":"add     eax, ecx" },
          { "str":"mov     ecx, edx" },
          { "str":"and     edx, 3" },
          { "str":"shr     ecx, 2" },
          { "str":"jz      short loc_10004007" }
        ],
        "callees":[]
      },
{
        "tag":"label_455",
        "label":"label_455",
        "out_true":"loc_1000400D",
        "out_false":"loc_10004007",
        "last_inst":"jz",
        "instructions":[
          { "str":"rep stosd" },
          { "str":"test    edx, edx" },
          { "str":"jz      short loc_1000400D" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004007",
        "label":"loc_10004007",
        "out_true":"loc_10004007",
        "out_false":"loc_1000400D",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     [edi], al" },
          { "str":"inc     edi" },
          { "str":"dec     edx" },
          { "str":"jnz     short loc_10004007" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000400D",
        "label":"loc_1000400D",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, [esp+4+arg_0]" },
          { "str":"pop     edi" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004013",
        "label":"loc_10004013",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, [esp+arg_0]" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10004018",
    "label":"sub_10004018",
    "type":"idapro",
    "callees":[
      { "tag":"RtlUnwind" }
    ],
    "blocks":[
      {
        "tag":"sub_10004018",
        "label":"sub_10004018",
        "out_true":"loc_10004030",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"push    ebp" },
          { "str":"push    0" },
          { "str":"push    0" },
          { "str":"push    offset loc_10004030" },
          { "str":"push    [ebp+TargetFrame]" },
          { "str":"call    RtlUnwind" }
        ],
        "callees":[
          { "tag":"RtlUnwind" }
        ]
      },
{
        "tag":"loc_10004030",
        "label":"loc_10004030",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     ebp" },
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"mov     esp, ebp" },
          { "str":"pop     ebp" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10004038",
    "label":"sub_10004038",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_10004038",
        "label":"sub_10004038",
        "out_true":"locret_10004059",
        "out_false":"label_456",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     ecx, [esp+arg_0]" },
          { "str":"test    dword ptr [ecx+4], 6" },
          { "str":"mov     eax, 1" },
          { "str":"jz      short locret_10004059" }
        ],
        "callees":[]
      },
{
        "tag":"label_456",
        "label":"label_456",
        "out_true":"locret_10004059",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esp+arg_4]" },
          { "str":"mov     edx, [esp+arg_C]" },
          { "str":"mov     [edx], eax" },
          { "str":"mov     eax, 3" }
        ],
        "callees":[]
      },
{
        "tag":"locret_10004059",
        "label":"locret_10004059",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_1000405A",
    "label":"sub_1000405A",
    "type":"idapro",
    "callees":[
      { "tag":"_ebx_esi_4_8_" },
      { "tag":"sub_100040EE" }
    ],
    "blocks":[
      {
        "tag":"sub_1000405A",
        "label":"sub_1000405A",
        "out_true":"loc_10004077",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"mov     eax, [esp+0Ch+arg_0]" },
          { "str":"push    eax" },
          { "str":"push    0FFFFFFFEh" },
          { "str":"push    offset sub_10004038" },
          { "str":"push    large dword ptr fs:0" },
          { "str":"mov     large fs:0, esp" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004077",
        "label":"loc_10004077",
        "out_true":"loc_100040B4",
        "out_false":"label_457",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     eax, [esp+1Ch+arg_0]" },
          { "str":"mov     ebx, [eax+8]" },
          { "str":"mov     esi, [eax+0Ch]" },
          { "str":"cmp     esi, 0FFFFFFFFh" },
          { "str":"jz      short loc_100040B4" }
        ],
        "callees":[]
      },
{
        "tag":"label_457",
        "label":"label_457",
        "out_true":"loc_100040B4",
        "out_false":"label_458",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     esi, [esp+1Ch+arg_4]" },
          { "str":"jz      short loc_100040B4" }
        ],
        "callees":[]
      },
{
        "tag":"label_458",
        "label":"label_458",
        "out_true":"loc_100040B2",
        "out_false":"label_459",
        "last_inst":"jnz",
        "instructions":[
          { "str":"lea     esi, [esi+esi*2]" },
          { "str":"mov     ecx, [ebx+esi*4]" },
          { "str":"mov     [esp+1Ch+var_14], ecx" },
          { "str":"mov     [eax+0Ch], ecx" },
          { "str":"cmp     dword ptr [ebx+esi*4+4], 0" },
          { "str":"jnz     short loc_100040B2" }
        ],
        "callees":[]
      },
{
        "tag":"label_459",
        "label":"label_459",
        "out_true":"loc_100040B2",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    101h" },
          { "str":"mov     eax, [ebx+esi*4+8]" },
          { "str":"call    sub_100040EE" },
          { "str":"call    dword ptr [ebx+esi*4+8]" }
        ],
        "callees":[
          { "tag":"_ebx_esi_4_8_" },
          { "tag":"sub_100040EE" }
        ]
      },
{
        "tag":"loc_100040B2",
        "label":"loc_100040B2",
        "out_true":"loc_10004077",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     short loc_10004077" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100040B4",
        "label":"loc_100040B4",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     large dword ptr fs:0" },
          { "str":"add     esp, 0Ch" },
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"rtn_5",
    "label":"rtn_5",
    "type":"ours",
    "callees":[],
    "blocks":[
      {
        "tag":"blk_460",
        "label":"blk_460",
        "out_true":"locret_100040E4",
        "out_false":"label_461",
        "last_inst":"jnz",
        "instructions":[
          { "str":"xor     eax, eax" },
          { "str":"mov     ecx, large fs:0" },
          { "str":"cmp     dword ptr [ecx+4], offset sub_10004038" },
          { "str":"jnz     short locret_100040E4" }
        ],
        "callees":[]
      },
{
        "tag":"label_461",
        "label":"label_461",
        "out_true":"locret_100040E4",
        "out_false":"label_462",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     edx, [ecx+0Ch]" },
          { "str":"mov     edx, [edx+0Ch]" },
          { "str":"cmp     [ecx+8], edx" },
          { "str":"jnz     short locret_100040E4" }
        ],
        "callees":[]
      },
{
        "tag":"label_462",
        "label":"label_462",
        "out_true":"locret_100040E4",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, 1" }
        ],
        "callees":[]
      },
{
        "tag":"locret_100040E4",
        "label":"locret_100040E4",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"label_463",
        "label":"label_463",
        "out_true":"loc_100040F8",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"push    ecx" },
          { "str":"mov     ebx, offset unk_10008370" },
          { "str":"jmp     short loc_100040F8" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_100040EE",
    "label":"sub_100040EE",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_100040EE",
        "label":"sub_100040EE",
        "out_true":"loc_100040F8",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"push    ecx" },
          { "str":"mov     ebx, offset unk_10008370" },
          { "str":"mov     ecx, [ebp+8]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100040F8",
        "label":"loc_100040F8",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     [ebx+8], ecx" },
          { "str":"mov     [ebx+4], eax" },
          { "str":"mov     [ebx+0Ch], ebp" },
          { "str":"pop     ecx" },
          { "str":"pop     ebx" },
          { "str":"retn    4" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"rtn_6",
    "label":"rtn_6",
    "type":"ours",
    "callees":[],
    "blocks":[
      {
        "tag":"blk_464",
        "label":"blk_464",
        "out_true":"sub_10004110",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    esi" },
          { "str":"inc     ebx" },
          { "str":"xor     dh, [eax]" },
          { "str":"pop     eax" },
          { "str":"inc     ebx" },
          { "str":"xor     [eax], dh" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10004110",
    "label":"sub_10004110",
    "type":"idapro",
    "callees":[
      { "tag":"_edi_ecx_4_4_" },
      { "tag":"_edi_ecx_4_8_" },
      { "tag":"sub_10004018" },
      { "tag":"sub_1000405A" },
      { "tag":"sub_100040EE" }
    ],
    "blocks":[
      {
        "tag":"sub_10004110",
        "label":"sub_10004110",
        "out_true":"loc_100041B0",
        "out_false":"label_465",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"sub     esp, 8" },
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"push    ebp" },
          { "str":"cld" },
          { "str":"mov     ebx, [ebp+TargetFrame]" },
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"test    dword ptr [eax+4], 6" },
          { "str":"jnz     loc_100041B0" }
        ],
        "callees":[]
      },
{
        "tag":"label_465",
        "label":"label_465",
        "out_true":"loc_10004143",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     [ebp+var_8], eax" },
          { "str":"mov     eax, [ebp+arg_8]" },
          { "str":"mov     [ebp+var_4], eax" },
          { "str":"lea     eax, [ebp+var_8]" },
          { "str":"mov     [ebx-4], eax" },
          { "str":"mov     esi, [ebx+0Ch]" },
          { "str":"mov     edi, [ebx+8]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004143",
        "label":"loc_10004143",
        "out_true":"loc_100041A9",
        "out_false":"label_466",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     esi, 0FFFFFFFFh" },
          { "str":"jz      short loc_100041A9" }
        ],
        "callees":[]
      },
{
        "tag":"label_466",
        "label":"label_466",
        "out_true":"loc_10004197",
        "out_false":"label_467",
        "last_inst":"jz",
        "instructions":[
          { "str":"lea     ecx, [esi+esi*2]" },
          { "str":"cmp     dword ptr [edi+ecx*4+4], 0" },
          { "str":"jz      short loc_10004197" }
        ],
        "callees":[]
      },
{
        "tag":"label_467",
        "label":"label_467",
        "out_true":"loc_10004197",
        "out_false":"label_468",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    esi" },
          { "str":"push    ebp" },
          { "str":"lea     ebp, [ebx+10h]" },
          { "str":"call    dword ptr [edi+ecx*4+4]" },
          { "str":"pop     ebp" },
          { "str":"pop     esi" },
          { "str":"mov     ebx, [ebp+TargetFrame]" },
          { "str":"or      eax, eax" },
          { "str":"jz      short loc_10004197" }
        ],
        "callees":[
          { "tag":"_edi_ecx_4_4_" }
        ]
      },
{
        "tag":"label_468",
        "label":"label_468",
        "out_true":"loc_100041A2",
        "out_false":"label_469",
        "last_inst":"js",
        "instructions":[
          { "str":"js      short loc_100041A2" }
        ],
        "callees":[]
      },
{
        "tag":"label_469",
        "label":"label_469",
        "out_true":"loc_10004197",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     edi, [ebx+8]" },
          { "str":"push    ebx" },
          { "str":"call    sub_10004018" },
          { "str":"add     esp, 4" },
          { "str":"lea     ebp, [ebx+10h]" },
          { "str":"push    esi" },
          { "str":"push    ebx" },
          { "str":"call    sub_1000405A" },
          { "str":"add     esp, 8" },
          { "str":"lea     ecx, [esi+esi*2]" },
          { "str":"push    1" },
          { "str":"mov     eax, [edi+ecx*4+8]" },
          { "str":"call    sub_100040EE" },
          { "str":"mov     eax, [edi+ecx*4]" },
          { "str":"mov     [ebx+0Ch], eax" },
          { "str":"call    dword ptr [edi+ecx*4+8]" }
        ],
        "callees":[
          { "tag":"_edi_ecx_4_8_" },
          { "tag":"sub_10004018" },
          { "tag":"sub_1000405A" },
          { "tag":"sub_100040EE" }
        ]
      },
{
        "tag":"loc_10004197",
        "label":"loc_10004197",
        "out_true":"loc_10004143",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     edi, [ebx+8]" },
          { "str":"lea     ecx, [esi+esi*2]" },
          { "str":"mov     esi, [edi+ecx*4]" },
          { "str":"jmp     short loc_10004143" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100041A2",
        "label":"loc_100041A2",
        "out_true":"loc_100041C5",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     eax, 0" },
          { "str":"jmp     short loc_100041C5" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100041A9",
        "label":"loc_100041A9",
        "out_true":"loc_100041C5",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     eax, 1" },
          { "str":"jmp     short loc_100041C5" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100041B0",
        "label":"loc_100041B0",
        "out_true":"loc_100041C5",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"lea     ebp, [ebx+10h]" },
          { "str":"push    0FFFFFFFFh" },
          { "str":"push    ebx" },
          { "str":"call    sub_1000405A" },
          { "str":"add     esp, 8" },
          { "str":"pop     ebp" },
          { "str":"mov     eax, 1" }
        ],
        "callees":[
          { "tag":"sub_1000405A" }
        ]
      },
{
        "tag":"loc_100041C5",
        "label":"loc_100041C5",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     ebp" },
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"mov     esp, ebp" },
          { "str":"pop     ebp" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"rtn_7",
    "label":"rtn_7",
    "type":"ours",
    "callees":[
      { "tag":"sub_1000405A" }
    ],
    "blocks":[
      {
        "tag":"blk_470",
        "label":"blk_470",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ecx, [esp+8]" },
          { "str":"mov     ebp, [ecx]" },
          { "str":"mov     eax, [ecx+1Ch]" },
          { "str":"push    eax" },
          { "str":"mov     eax, [ecx+18h]" },
          { "str":"push    eax" },
          { "str":"call    sub_1000405A" },
          { "str":"add     esp, 8" },
          { "str":"pop     ebp" },
          { "str":"retn    4" }
        ],
        "callees":[
          { "tag":"sub_1000405A" }
        ]
      }
    ]
  },{
    "tag":"sub_100041E8",
    "label":"sub_100041E8",
    "type":"idapro",
    "callees":[
      { "tag":"__alloca_probe" },
      { "tag":"ds_LCMapStringA" },
      { "tag":"ds_LCMapStringW" },
      { "tag":"ds_MultiByteToWideChar" },
      { "tag":"ds_WideCharToMultiByte" },
      { "tag":"sub_1000440C" }
    ],
    "blocks":[
      {
        "tag":"sub_100041E8",
        "label":"sub_100041E8",
        "out_true":"loc_1000425E",
        "out_false":"label_471",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    0FFFFFFFFh" },
          { "str":"push    offset stru_10005480" },
          { "str":"push    offset sub_10004110" },
          { "str":"mov     eax, large fs:0" },
          { "str":"push    eax" },
          { "str":"mov     large fs:0, esp" },
          { "str":"sub     esp, 1Ch" },
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"mov     [ebp+ms_exc.old_esp], esp" },
          { "str":"xor     edi, edi" },
          { "str":"cmp     dword_10008C3C, edi" },
          { "str":"jnz     short loc_1000425E" }
        ],
        "callees":[]
      },
{
        "tag":"label_471",
        "label":"label_471",
        "out_true":"loc_1000423C",
        "out_false":"label_472",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    edi" },
          { "str":"push    edi" },
          { "str":"push    1" },
          { "str":"pop     ebx" },
          { "str":"push    ebx" },
          { "str":"push    offset SrcStr" },
          { "str":"mov     esi, 100h" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"call    ds:LCMapStringW" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_1000423C" }
        ],
        "callees":[
          { "tag":"ds_LCMapStringW" }
        ]
      },
{
        "tag":"label_472",
        "label":"label_472",
        "out_true":"loc_1000425E",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     dword_10008C3C, ebx" },
          { "str":"jmp     short loc_1000425E" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000423C",
        "label":"loc_1000423C",
        "out_true":"loc_10004376",
        "out_false":"label_473",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    edi" },
          { "str":"push    edi" },
          { "str":"push    ebx" },
          { "str":"push    offset byte_10005474" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"call    ds:LCMapStringA" },
          { "str":"test    eax, eax" },
          { "str":"jz      loc_10004376" }
        ],
        "callees":[
          { "tag":"ds_LCMapStringA" }
        ]
      },
{
        "tag":"label_473",
        "label":"label_473",
        "out_true":"loc_1000425E",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     dword_10008C3C, 2" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000425E",
        "label":"loc_1000425E",
        "out_true":"loc_10004273",
        "out_false":"label_474",
        "last_inst":"jl",
        "instructions":[
          { "str":"cmp     [ebp+cchSrc], edi" },
          { "str":"jle     short loc_10004273" }
        ],
        "callees":[]
      },
{
        "tag":"label_474",
        "label":"label_474",
        "out_true":"loc_10004273",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    [ebp+cchSrc]" },
          { "str":"push    [ebp+lpSrcStr]" },
          { "str":"call    sub_1000440C" },
          { "str":"pop     ecx" },
          { "str":"pop     ecx" },
          { "str":"mov     [ebp+cchSrc], eax" }
        ],
        "callees":[
          { "tag":"sub_1000440C" }
        ]
      },
{
        "tag":"loc_10004273",
        "label":"loc_10004273",
        "out_true":"loc_1000429A",
        "out_false":"label_475",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     eax, dword_10008C3C" },
          { "str":"cmp     eax, 2" },
          { "str":"jnz     short loc_1000429A" }
        ],
        "callees":[]
      },
{
        "tag":"label_475",
        "label":"label_475",
        "out_true":"loc_10004378",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    [ebp+cchDest]" },
          { "str":"push    [ebp+lpDestStr]" },
          { "str":"push    [ebp+cchSrc]" },
          { "str":"push    [ebp+lpSrcStr]" },
          { "str":"push    [ebp+dwMapFlags]" },
          { "str":"push    [ebp+Locale]" },
          { "str":"call    ds:LCMapStringA" },
          { "str":"jmp     loc_10004378" }
        ],
        "callees":[
          { "tag":"ds_LCMapStringA" }
        ]
      },
{
        "tag":"loc_1000429A",
        "label":"loc_1000429A",
        "out_true":"loc_10004376",
        "out_false":"label_476",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     eax, 1" },
          { "str":"jnz     loc_10004376" }
        ],
        "callees":[]
      },
{
        "tag":"label_476",
        "label":"label_476",
        "out_true":"loc_100042B0",
        "out_false":"label_477",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     [ebp+CodePage], edi" },
          { "str":"jnz     short loc_100042B0" }
        ],
        "callees":[]
      },
{
        "tag":"label_477",
        "label":"label_477",
        "out_true":"loc_100042B0",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, dword_10008C34" },
          { "str":"mov     [ebp+CodePage], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100042B0",
        "label":"loc_100042B0",
        "out_true":"loc_10004376",
        "out_false":"label_478",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    edi" },
          { "str":"push    edi" },
          { "str":"push    [ebp+cchSrc]" },
          { "str":"push    [ebp+lpSrcStr]" },
          { "str":"mov     eax, [ebp+arg_1C]" },
          { "str":"neg     eax" },
          { "str":"sbb     eax, eax" },
          { "str":"and     eax, 8" },
          { "str":"inc     eax" },
          { "str":"push    eax" },
          { "str":"push    [ebp+CodePage]" },
          { "str":"call    ds:MultiByteToWideChar" },
          { "str":"mov     ebx, eax" },
          { "str":"mov     [ebp+var_1C], ebx" },
          { "str":"cmp     ebx, edi" },
          { "str":"jz      loc_10004376" }
        ],
        "callees":[
          { "tag":"ds_MultiByteToWideChar" }
        ]
      },
{
        "tag":"label_478",
        "label":"label_478",
        "out_true":"loc_1000430B",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     [ebp+ms_exc.registration.TryLevel], edi" },
          { "str":"lea     eax, [ebx+ebx]" },
          { "str":"add     eax, 3" },
          { "str":"and     al, 0FCh" },
          { "str":"call    __alloca_probe" },
          { "str":"mov     [ebp+ms_exc.old_esp], esp" },
          { "str":"mov     eax, esp" },
          { "str":"mov     [ebp+lpWideCharStr], eax" },
          { "str":"or      [ebp+ms_exc.registration.TryLevel], 0FFFFFFFFh" },
          { "str":"jmp     short loc_1000430B" }
        ],
        "callees":[
          { "tag":"__alloca_probe" }
        ]
      },
{
        "tag":"loc_100042F8",
        "label":"loc_100042F8",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    1" },
          { "str":"pop     eax" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100042FC",
        "label":"loc_100042FC",
        "out_true":"loc_1000430B",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     esp, [ebp+ms_exc.old_esp]" },
          { "str":"xor     edi, edi" },
          { "str":"mov     [ebp+lpWideCharStr], edi" },
          { "str":"or      [ebp+ms_exc.registration.TryLevel], 0FFFFFFFFh" },
          { "str":"mov     ebx, [ebp+var_1C]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000430B",
        "label":"loc_1000430B",
        "out_true":"loc_10004376",
        "out_false":"label_479",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     [ebp+lpWideCharStr], edi" },
          { "str":"jz      short loc_10004376" }
        ],
        "callees":[]
      },
{
        "tag":"label_479",
        "label":"label_479",
        "out_true":"loc_10004376",
        "out_false":"label_480",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"push    [ebp+lpWideCharStr]" },
          { "str":"push    [ebp+cchSrc]" },
          { "str":"push    [ebp+lpSrcStr]" },
          { "str":"push    1" },
          { "str":"push    [ebp+CodePage]" },
          { "str":"call    ds:MultiByteToWideChar" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10004376" }
        ],
        "callees":[
          { "tag":"ds_MultiByteToWideChar" }
        ]
      },
{
        "tag":"label_480",
        "label":"label_480",
        "out_true":"loc_10004376",
        "out_false":"label_481",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    edi" },
          { "str":"push    edi" },
          { "str":"push    ebx" },
          { "str":"push    [ebp+lpWideCharStr]" },
          { "str":"push    [ebp+dwMapFlags]" },
          { "str":"push    [ebp+Locale]" },
          { "str":"call    ds:LCMapStringW" },
          { "str":"mov     esi, eax" },
          { "str":"mov     [ebp+var_28], esi" },
          { "str":"cmp     esi, edi" },
          { "str":"jz      short loc_10004376" }
        ],
        "callees":[
          { "tag":"ds_LCMapStringW" }
        ]
      },
{
        "tag":"label_481",
        "label":"label_481",
        "out_true":"loc_1000438A",
        "out_false":"label_482",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    byte ptr [ebp+dwMapFlags+1], 4" },
          { "str":"jz      short loc_1000438A" }
        ],
        "callees":[]
      },
{
        "tag":"label_482",
        "label":"label_482",
        "out_true":"loc_10004405",
        "out_false":"label_483",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     [ebp+cchDest], edi" },
          { "str":"jz      loc_10004405" }
        ],
        "callees":[]
      },
{
        "tag":"label_483",
        "label":"label_483",
        "out_true":"loc_10004376",
        "out_false":"label_484",
        "last_inst":"jg",
        "instructions":[
          { "str":"cmp     esi, [ebp+cchDest]" },
          { "str":"jg      short loc_10004376" }
        ],
        "callees":[]
      },
{
        "tag":"label_484",
        "label":"label_484",
        "out_true":"loc_10004405",
        "out_false":"loc_10004376",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    [ebp+cchDest]" },
          { "str":"push    [ebp+lpDestStr]" },
          { "str":"push    ebx" },
          { "str":"push    [ebp+lpWideCharStr]" },
          { "str":"push    [ebp+dwMapFlags]" },
          { "str":"push    [ebp+Locale]" },
          { "str":"call    ds:LCMapStringW" },
          { "str":"test    eax, eax" },
          { "str":"jnz     loc_10004405" }
        ],
        "callees":[
          { "tag":"ds_LCMapStringW" }
        ]
      },
{
        "tag":"loc_10004376",
        "label":"loc_10004376",
        "out_true":"loc_10004378",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     eax, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004378",
        "label":"loc_10004378",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"lea     esp, [ebp-38h]" },
          { "str":"mov     ecx, [ebp+ms_exc.registration.Next]" },
          { "str":"mov     large fs:0, ecx" },
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000438A",
        "label":"loc_1000438A",
        "out_true":"loc_100043BE",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     [ebp+ms_exc.registration.TryLevel], 1" },
          { "str":"lea     eax, [esi+esi]" },
          { "str":"add     eax, 3" },
          { "str":"and     al, 0FCh" },
          { "str":"call    __alloca_probe" },
          { "str":"mov     [ebp+ms_exc.old_esp], esp" },
          { "str":"mov     ebx, esp" },
          { "str":"mov     [ebp+var_20], ebx" },
          { "str":"or      [ebp+ms_exc.registration.TryLevel], 0FFFFFFFFh" },
          { "str":"jmp     short loc_100043BE" }
        ],
        "callees":[
          { "tag":"__alloca_probe" }
        ]
      },
{
        "tag":"loc_100043AC",
        "label":"loc_100043AC",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    1" },
          { "str":"pop     eax" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100043B0",
        "label":"loc_100043B0",
        "out_true":"loc_100043BE",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     esp, [ebp+ms_exc.old_esp]" },
          { "str":"xor     edi, edi" },
          { "str":"xor     ebx, ebx" },
          { "str":"or      [ebp+ms_exc.registration.TryLevel], 0FFFFFFFFh" },
          { "str":"mov     esi, [ebp+var_28]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100043BE",
        "label":"loc_100043BE",
        "out_true":"loc_10004376",
        "out_false":"label_485",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     ebx, edi" },
          { "str":"jz      short loc_10004376" }
        ],
        "callees":[]
      },
{
        "tag":"label_485",
        "label":"label_485",
        "out_true":"loc_10004376",
        "out_false":"label_486",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    esi" },
          { "str":"push    ebx" },
          { "str":"push    [ebp+var_1C]" },
          { "str":"push    [ebp+lpWideCharStr]" },
          { "str":"push    [ebp+dwMapFlags]" },
          { "str":"push    [ebp+Locale]" },
          { "str":"call    ds:LCMapStringW" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10004376" }
        ],
        "callees":[
          { "tag":"ds_LCMapStringW" }
        ]
      },
{
        "tag":"label_486",
        "label":"label_486",
        "out_true":"loc_100043E5",
        "out_false":"label_487",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     [ebp+cchDest], edi" },
          { "str":"push    edi" },
          { "str":"push    edi" },
          { "str":"jnz     short loc_100043E5" }
        ],
        "callees":[]
      },
{
        "tag":"label_487",
        "label":"label_487",
        "out_true":"loc_100043EB",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    edi" },
          { "str":"push    edi" },
          { "str":"jmp     short loc_100043EB" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100043E5",
        "label":"loc_100043E5",
        "out_true":"loc_100043EB",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    [ebp+cchDest]" },
          { "str":"push    [ebp+lpDestStr]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100043EB",
        "label":"loc_100043EB",
        "out_true":"loc_10004376",
        "out_false":"loc_10004405",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    esi" },
          { "str":"push    ebx" },
          { "str":"push    220h" },
          { "str":"push    [ebp+CodePage]" },
          { "str":"call    ds:WideCharToMultiByte" },
          { "str":"mov     esi, eax" },
          { "str":"cmp     esi, edi" },
          { "str":"jz      loc_10004376" }
        ],
        "callees":[
          { "tag":"ds_WideCharToMultiByte" }
        ]
      },
{
        "tag":"loc_10004405",
        "label":"loc_10004405",
        "out_true":"loc_10004378",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     eax, esi" },
          { "str":"jmp     loc_10004378" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_1000440C",
    "label":"sub_1000440C",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_1000440C",
        "label":"sub_1000440C",
        "out_true":"loc_10004429",
        "out_false":"loc_1000441C",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     edx, [esp+arg_4]" },
          { "str":"mov     eax, [esp+arg_0]" },
          { "str":"test    edx, edx" },
          { "str":"push    esi" },
          { "str":"lea     ecx, [edx-1]" },
          { "str":"jz      short loc_10004429" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000441C",
        "label":"loc_1000441C",
        "out_true":"loc_10004429",
        "out_false":"label_488",
        "last_inst":"jz",
        "instructions":[
          { "str":"cmp     byte ptr [eax], 0" },
          { "str":"jz      short loc_10004429" }
        ],
        "callees":[]
      },
{
        "tag":"label_488",
        "label":"label_488",
        "out_true":"loc_1000441C",
        "out_false":"loc_10004429",
        "last_inst":"jnz",
        "instructions":[
          { "str":"inc     eax" },
          { "str":"mov     esi, ecx" },
          { "str":"dec     ecx" },
          { "str":"test    esi, esi" },
          { "str":"jnz     short loc_1000441C" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004429",
        "label":"loc_10004429",
        "out_true":"loc_10004434",
        "out_false":"label_489",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     byte ptr [eax], 0" },
          { "str":"pop     esi" },
          { "str":"jnz     short loc_10004434" }
        ],
        "callees":[]
      },
{
        "tag":"label_489",
        "label":"label_489",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"sub     eax, [esp+arg_0]" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004434",
        "label":"loc_10004434",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, edx" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10004437",
    "label":"sub_10004437",
    "type":"idapro",
    "callees":[
      { "tag":"__alloca_probe" },
      { "tag":"ds_GetStringTypeA" },
      { "tag":"ds_GetStringTypeW" },
      { "tag":"ds_MultiByteToWideChar" },
      { "tag":"sub_10003FC0" }
    ],
    "blocks":[
      {
        "tag":"sub_10004437",
        "label":"sub_10004437",
        "out_true":"loc_100044A6",
        "out_false":"label_490",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    0FFFFFFFFh" },
          { "str":"push    offset stru_10005498" },
          { "str":"push    offset sub_10004110" },
          { "str":"mov     eax, large fs:0" },
          { "str":"push    eax" },
          { "str":"mov     large fs:0, esp" },
          { "str":"sub     esp, 18h" },
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"mov     [ebp+ms_exc.old_esp], esp" },
          { "str":"mov     eax, dword_10008C40" },
          { "str":"xor     ebx, ebx" },
          { "str":"cmp     eax, ebx" },
          { "str":"jnz     short loc_100044A6" }
        ],
        "callees":[]
      },
{
        "tag":"label_490",
        "label":"label_490",
        "out_true":"loc_10004484",
        "out_false":"label_491",
        "last_inst":"jz",
        "instructions":[
          { "str":"lea     eax, [ebp+CharType]" },
          { "str":"push    eax" },
          { "str":"push    1" },
          { "str":"pop     esi" },
          { "str":"push    esi" },
          { "str":"push    offset SrcStr" },
          { "str":"push    esi" },
          { "str":"call    ds:GetStringTypeW" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10004484" }
        ],
        "callees":[
          { "tag":"ds_GetStringTypeW" }
        ]
      },
{
        "tag":"label_491",
        "label":"label_491",
        "out_true":"loc_100044A1",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     eax, esi" },
          { "str":"jmp     short loc_100044A1" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004484",
        "label":"loc_10004484",
        "out_true":"loc_1000456C",
        "out_false":"label_492",
        "last_inst":"jz",
        "instructions":[
          { "str":"lea     eax, [ebp+CharType]" },
          { "str":"push    eax" },
          { "str":"push    esi" },
          { "str":"push    offset byte_10005474" },
          { "str":"push    esi" },
          { "str":"push    ebx" },
          { "str":"call    ds:GetStringTypeA" },
          { "str":"test    eax, eax" },
          { "str":"jz      loc_1000456C" }
        ],
        "callees":[
          { "tag":"ds_GetStringTypeA" }
        ]
      },
{
        "tag":"label_492",
        "label":"label_492",
        "out_true":"loc_100044A1",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    2" },
          { "str":"pop     eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100044A1",
        "label":"loc_100044A1",
        "out_true":"loc_100044A6",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     dword_10008C40, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100044A6",
        "label":"loc_100044A6",
        "out_true":"loc_100044CF",
        "out_false":"label_493",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     eax, 2" },
          { "str":"jnz     short loc_100044CF" }
        ],
        "callees":[]
      },
{
        "tag":"label_493",
        "label":"label_493",
        "out_true":"loc_100044B7",
        "out_false":"label_494",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     eax, [ebp+Locale]" },
          { "str":"cmp     eax, ebx" },
          { "str":"jnz     short loc_100044B7" }
        ],
        "callees":[]
      },
{
        "tag":"label_494",
        "label":"label_494",
        "out_true":"loc_100044B7",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, dword_10008C24" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100044B7",
        "label":"loc_100044B7",
        "out_true":"loc_1000456E",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    [ebp+lpCharType]" },
          { "str":"push    [ebp+cchSrc]" },
          { "str":"push    [ebp+lpSrcStr]" },
          { "str":"push    [ebp+dwInfoType]" },
          { "str":"push    eax" },
          { "str":"call    ds:GetStringTypeA" },
          { "str":"jmp     loc_1000456E" }
        ],
        "callees":[
          { "tag":"ds_GetStringTypeA" }
        ]
      },
{
        "tag":"loc_100044CF",
        "label":"loc_100044CF",
        "out_true":"loc_1000456C",
        "out_false":"label_495",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     eax, 1" },
          { "str":"jnz     loc_1000456C" }
        ],
        "callees":[]
      },
{
        "tag":"label_495",
        "label":"label_495",
        "out_true":"loc_100044E5",
        "out_false":"label_496",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     [ebp+CodePage], ebx" },
          { "str":"jnz     short loc_100044E5" }
        ],
        "callees":[]
      },
{
        "tag":"label_496",
        "label":"label_496",
        "out_true":"loc_100044E5",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, dword_10008C34" },
          { "str":"mov     [ebp+CodePage], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100044E5",
        "label":"loc_100044E5",
        "out_true":"loc_1000456C",
        "out_false":"label_497",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"push    ebx" },
          { "str":"push    [ebp+cchSrc]" },
          { "str":"push    [ebp+lpSrcStr]" },
          { "str":"mov     eax, [ebp+arg_18]" },
          { "str":"neg     eax" },
          { "str":"sbb     eax, eax" },
          { "str":"and     eax, 8" },
          { "str":"inc     eax" },
          { "str":"push    eax" },
          { "str":"push    [ebp+CodePage]" },
          { "str":"call    ds:MultiByteToWideChar" },
          { "str":"mov     [ebp+cchWideChar], eax" },
          { "str":"cmp     eax, ebx" },
          { "str":"jz      short loc_1000456C" }
        ],
        "callees":[
          { "tag":"ds_MultiByteToWideChar" }
        ]
      },
{
        "tag":"label_497",
        "label":"label_497",
        "out_true":"loc_1000453B",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     [ebp+ms_exc.registration.TryLevel], ebx" },
          { "str":"lea     edi, [eax+eax]" },
          { "str":"mov     eax, edi" },
          { "str":"add     eax, 3" },
          { "str":"and     al, 0FCh" },
          { "str":"call    __alloca_probe" },
          { "str":"mov     [ebp+ms_exc.old_esp], esp" },
          { "str":"mov     esi, esp" },
          { "str":"mov     [ebp+var_24], esi" },
          { "str":"push    edi" },
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"call    sub_10003FC0" },
          { "str":"add     esp, 0Ch" },
          { "str":"jmp     short loc_1000453B" }
        ],
        "callees":[
          { "tag":"__alloca_probe" },
          { "tag":"sub_10003FC0" }
        ]
      },
{
        "tag":"loc_10004530",
        "label":"loc_10004530",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    1" },
          { "str":"pop     eax" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004534",
        "label":"loc_10004534",
        "out_true":"loc_1000453B",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     esp, [ebp+ms_exc.old_esp]" },
          { "str":"xor     ebx, ebx" },
          { "str":"xor     esi, esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000453B",
        "label":"loc_1000453B",
        "out_true":"loc_1000456C",
        "out_false":"label_498",
        "last_inst":"jz",
        "instructions":[
          { "str":"or      [ebp+ms_exc.registration.TryLevel], 0FFFFFFFFh" },
          { "str":"cmp     esi, ebx" },
          { "str":"jz      short loc_1000456C" }
        ],
        "callees":[]
      },
{
        "tag":"label_498",
        "label":"label_498",
        "out_true":"loc_1000456C",
        "out_false":"label_499",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    [ebp+cchWideChar]" },
          { "str":"push    esi" },
          { "str":"push    [ebp+cchSrc]" },
          { "str":"push    [ebp+lpSrcStr]" },
          { "str":"push    1" },
          { "str":"push    [ebp+CodePage]" },
          { "str":"call    ds:MultiByteToWideChar" },
          { "str":"cmp     eax, ebx" },
          { "str":"jz      short loc_1000456C" }
        ],
        "callees":[
          { "tag":"ds_MultiByteToWideChar" }
        ]
      },
{
        "tag":"label_499",
        "label":"label_499",
        "out_true":"loc_1000456E",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    [ebp+lpCharType]" },
          { "str":"push    eax" },
          { "str":"push    esi" },
          { "str":"push    [ebp+dwInfoType]" },
          { "str":"call    ds:GetStringTypeW" },
          { "str":"jmp     short loc_1000456E" }
        ],
        "callees":[
          { "tag":"ds_GetStringTypeW" }
        ]
      },
{
        "tag":"loc_1000456C",
        "label":"loc_1000456C",
        "out_true":"loc_1000456E",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     eax, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000456E",
        "label":"loc_1000456E",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"lea     esp, [ebp-34h]" },
          { "str":"mov     ecx, [ebp+ms_exc.registration.Next]" },
          { "str":"mov     large fs:0, ecx" },
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10004580",
    "label":"sub_10004580",
    "type":"idapro",
    "callees":[
      { "tag":"sub_1000135C" }
    ],
    "blocks":[
      {
        "tag":"sub_10004580",
        "label":"sub_10004580",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"call    sub_1000135C" },
          { "str":"add     eax, 8" },
          { "str":"retn" }
        ],
        "callees":[
          { "tag":"sub_1000135C" }
        ]
      }
    ]
  },{
    "tag":"sub_10004589",
    "label":"sub_10004589",
    "type":"idapro",
    "callees":[
      { "tag":"ds_InterlockedIncrement" },
      { "tag":"edi" },
      { "tag":"sub_10001F46" },
      { "tag":"sub_10001FA7" },
      { "tag":"sub_100045F8" }
    ],
    "blocks":[
      {
        "tag":"sub_10004589",
        "label":"sub_10004589",
        "out_true":"loc_100045A7",
        "out_false":"label_500",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"xor     ebx, ebx" },
          { "str":"cmp     dword_10008C24, ebx" },
          { "str":"jnz     short loc_100045A7" }
        ],
        "callees":[]
      },
{
        "tag":"label_500",
        "label":"label_500",
        "out_true":"loc_100045F6",
        "out_false":"label_501",
        "last_inst":"jl",
        "instructions":[
          { "str":"mov     eax, dword ptr [esp+4+CharType]" },
          { "str":"cmp     eax, 61h" },
          { "str":"jl      short loc_100045F6" }
        ],
        "callees":[]
      },
{
        "tag":"label_501",
        "label":"label_501",
        "out_true":"loc_100045F6",
        "out_false":"label_502",
        "last_inst":"jg",
        "instructions":[
          { "str":"cmp     eax, 7Ah" },
          { "str":"jg      short loc_100045F6" }
        ],
        "callees":[]
      },
{
        "tag":"label_502",
        "label":"label_502",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"sub     eax, 20h" },
          { "str":"pop     ebx" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100045A7",
        "label":"loc_100045A7",
        "out_true":"loc_100045D1",
        "out_false":"label_503",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    esi" },
          { "str":"mov     esi, offset Addend" },
          { "str":"push    edi" },
          { "str":"push    esi" },
          { "str":"call    ds:InterlockedIncrement" },
          { "str":"cmp     dword_10008D90, ebx" },
          { "str":"mov     edi, ds:InterlockedDecrement" },
          { "str":"jz      short loc_100045D1" }
        ],
        "callees":[
          { "tag":"ds_InterlockedIncrement" }
        ]
      },
{
        "tag":"label_503",
        "label":"label_503",
        "out_true":"loc_100045D1",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    esi" },
          { "str":"call    edi" },
          { "str":"push    13h" },
          { "str":"call    sub_10001F46" },
          { "str":"pop     ecx" },
          { "str":"push    1" },
          { "str":"pop     ebx" }
        ],
        "callees":[
          { "tag":"edi" },
          { "tag":"sub_10001F46" }
        ]
      },
{
        "tag":"loc_100045D1",
        "label":"loc_100045D1",
        "out_true":"loc_100045ED",
        "out_false":"label_504",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    dword ptr [esp+0Ch+CharType]" },
          { "str":"call    sub_100045F8" },
          { "str":"test    ebx, ebx" },
          { "str":"pop     ecx" },
          { "str":"mov     dword ptr [esp+0Ch+CharType], eax" },
          { "str":"jz      short loc_100045ED" }
        ],
        "callees":[
          { "tag":"sub_100045F8" }
        ]
      },
{
        "tag":"label_504",
        "label":"label_504",
        "out_true":"loc_100045F0",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    13h" },
          { "str":"call    sub_10001FA7" },
          { "str":"pop     ecx" },
          { "str":"jmp     short loc_100045F0" }
        ],
        "callees":[
          { "tag":"sub_10001FA7" }
        ]
      },
{
        "tag":"loc_100045ED",
        "label":"loc_100045ED",
        "out_true":"loc_100045F0",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    esi" },
          { "str":"call    edi" }
        ],
        "callees":[
          { "tag":"edi" }
        ]
      },
{
        "tag":"loc_100045F0",
        "label":"loc_100045F0",
        "out_true":"loc_100045F6",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, dword ptr [esp+0Ch+CharType]" },
          { "str":"pop     edi" },
          { "str":"pop     esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100045F6",
        "label":"loc_100045F6",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     ebx" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_100045F8",
    "label":"sub_100045F8",
    "type":"idapro",
    "callees":[
      { "tag":"sub_100041E8" },
      { "tag":"sub_100046C4" }
    ],
    "blocks":[
      {
        "tag":"sub_100045F8",
        "label":"sub_100045F8",
        "out_true":"loc_10004623",
        "out_false":"label_505",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    ecx" },
          { "str":"cmp     dword_10008C24, 0" },
          { "str":"push    ebx" },
          { "str":"jnz     short loc_10004623" }
        ],
        "callees":[]
      },
{
        "tag":"label_505",
        "label":"label_505",
        "out_true":"loc_100046C1",
        "out_false":"label_506",
        "last_inst":"jl",
        "instructions":[
          { "str":"mov     eax, dword ptr [ebp+CharType]" },
          { "str":"cmp     eax, 61h" },
          { "str":"jl      loc_100046C1" }
        ],
        "callees":[]
      },
{
        "tag":"label_506",
        "label":"label_506",
        "out_true":"loc_100046C1",
        "out_false":"label_507",
        "last_inst":"jg",
        "instructions":[
          { "str":"cmp     eax, 7Ah" },
          { "str":"jg      loc_100046C1" }
        ],
        "callees":[]
      },
{
        "tag":"label_507",
        "label":"label_507",
        "out_true":"loc_100046C1",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"sub     eax, 20h" },
          { "str":"jmp     loc_100046C1" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004623",
        "label":"loc_10004623",
        "out_true":"loc_10004656",
        "out_false":"label_508",
        "last_inst":"jg",
        "instructions":[
          { "str":"mov     ebx, dword ptr [ebp+CharType]" },
          { "str":"cmp     ebx, 100h" },
          { "str":"jge     short loc_10004656" }
        ],
        "callees":[]
      },
{
        "tag":"label_508",
        "label":"label_508",
        "out_true":"loc_10004643",
        "out_false":"label_509",
        "last_inst":"jl",
        "instructions":[
          { "str":"cmp     dword_100086F4, 1" },
          { "str":"jle     short loc_10004643" }
        ],
        "callees":[]
      },
{
        "tag":"label_509",
        "label":"label_509",
        "out_true":"loc_1000464E",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    2" },
          { "str":"push    ebx" },
          { "str":"call    sub_100046C4" },
          { "str":"pop     ecx" },
          { "str":"pop     ecx" },
          { "str":"jmp     short loc_1000464E" }
        ],
        "callees":[
          { "tag":"sub_100046C4" }
        ]
      },
{
        "tag":"loc_10004643",
        "label":"loc_10004643",
        "out_true":"loc_1000464E",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, off_100084E8" },
          { "str":"mov     al, [eax+ebx*2]" },
          { "str":"and     eax, 2" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000464E",
        "label":"loc_1000464E",
        "out_true":"loc_10004656",
        "out_false":"loc_10004652",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    eax, eax" },
          { "str":"jnz     short loc_10004656" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004652",
        "label":"loc_10004652",
        "out_true":"loc_100046C1",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     eax, ebx" },
          { "str":"jmp     short loc_100046C1" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004656",
        "label":"loc_10004656",
        "out_true":"loc_10004679",
        "out_false":"label_510",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     edx, off_100084E8" },
          { "str":"mov     eax, ebx" },
          { "str":"sar     eax, 8" },
          { "str":"movzx   ecx, al" },
          { "str":"test    byte ptr [edx+ecx*2+1], 80h" },
          { "str":"jz      short loc_10004679" }
        ],
        "callees":[]
      },
{
        "tag":"label_510",
        "label":"label_510",
        "out_true":"loc_10004682",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"and     byte ptr [ebp+0Ah], 0" },
          { "str":"mov     byte ptr [ebp+CharType], al" },
          { "str":"mov     byte ptr [ebp+CharType+1], bl" },
          { "str":"push    2" },
          { "str":"jmp     short loc_10004682" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004679",
        "label":"loc_10004679",
        "out_true":"loc_10004682",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"and     byte ptr [ebp+CharType+1], 0" },
          { "str":"mov     byte ptr [ebp+CharType], bl" },
          { "str":"push    1" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004682",
        "label":"loc_10004682",
        "out_true":"loc_10004652",
        "out_false":"label_511",
        "last_inst":"jz",
        "instructions":[
          { "str":"pop     eax" },
          { "str":"lea     ecx, [ebp+DestStr]" },
          { "str":"push    1" },
          { "str":"push    0" },
          { "str":"push    3" },
          { "str":"push    ecx" },
          { "str":"push    eax" },
          { "str":"lea     eax, [ebp+CharType]" },
          { "str":"push    eax" },
          { "str":"push    200h" },
          { "str":"push    dword_10008C24" },
          { "str":"call    sub_100041E8" },
          { "str":"add     esp, 20h" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10004652" }
        ],
        "callees":[
          { "tag":"sub_100041E8" }
        ]
      },
{
        "tag":"label_511",
        "label":"label_511",
        "out_true":"loc_100046B4",
        "out_false":"label_512",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     eax, 1" },
          { "str":"jnz     short loc_100046B4" }
        ],
        "callees":[]
      },
{
        "tag":"label_512",
        "label":"label_512",
        "out_true":"loc_100046C1",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"movzx   eax, [ebp+DestStr]" },
          { "str":"jmp     short loc_100046C1" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100046B4",
        "label":"loc_100046B4",
        "out_true":"loc_100046C1",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"movzx   eax, [ebp+var_3]" },
          { "str":"movzx   ecx, [ebp+DestStr]" },
          { "str":"shl     eax, 8" },
          { "str":"or      eax, ecx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100046C1",
        "label":"loc_100046C1",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     ebx" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_100046C4",
    "label":"sub_100046C4",
    "type":"idapro",
    "callees":[
      { "tag":"sub_10004437" }
    ],
    "blocks":[
      {
        "tag":"sub_100046C4",
        "label":"sub_100046C4",
        "out_true":"loc_100046E2",
        "out_false":"label_513",
        "last_inst":"ja",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    ecx" },
          { "str":"mov     eax, dword ptr [ebp+CharType]" },
          { "str":"lea     ecx, [eax+1]" },
          { "str":"cmp     ecx, 100h" },
          { "str":"ja      short loc_100046E2" }
        ],
        "callees":[]
      },
{
        "tag":"label_513",
        "label":"label_513",
        "out_true":"loc_10004734",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     ecx, off_100084E8" },
          { "str":"movzx   eax, word ptr [ecx+eax*2]" },
          { "str":"jmp     short loc_10004734" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100046E2",
        "label":"loc_100046E2",
        "out_true":"loc_10004707",
        "out_false":"label_514",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     ecx, eax" },
          { "str":"push    esi" },
          { "str":"mov     esi, off_100084E8" },
          { "str":"sar     ecx, 8" },
          { "str":"movzx   edx, cl" },
          { "str":"test    byte ptr [esi+edx*2+1], 80h" },
          { "str":"pop     esi" },
          { "str":"jz      short loc_10004707" }
        ],
        "callees":[]
      },
{
        "tag":"label_514",
        "label":"label_514",
        "out_true":"loc_10004710",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"and     [ebp+var_2], 0" },
          { "str":"mov     [ebp+SrcStr], cl" },
          { "str":"mov     [ebp+var_3], al" },
          { "str":"push    2" },
          { "str":"jmp     short loc_10004710" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004707",
        "label":"loc_10004707",
        "out_true":"loc_10004710",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"and     [ebp+var_3], 0" },
          { "str":"mov     [ebp+SrcStr], al" },
          { "str":"push    1" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004710",
        "label":"loc_10004710",
        "out_true":"loc_10004730",
        "out_false":"label_515",
        "last_inst":"jnz",
        "instructions":[
          { "str":"pop     eax" },
          { "str":"lea     ecx, [ebp+0Ah]" },
          { "str":"push    1" },
          { "str":"push    0" },
          { "str":"push    0" },
          { "str":"push    ecx" },
          { "str":"push    eax" },
          { "str":"lea     eax, [ebp+SrcStr]" },
          { "str":"push    eax" },
          { "str":"push    1" },
          { "str":"call    sub_10004437" },
          { "str":"add     esp, 1Ch" },
          { "str":"test    eax, eax" },
          { "str":"jnz     short loc_10004730" }
        ],
        "callees":[
          { "tag":"sub_10004437" }
        ]
      },
{
        "tag":"label_515",
        "label":"label_515",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004730",
        "label":"loc_10004730",
        "out_true":"loc_10004734",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"movzx   eax, word ptr [ebp+0Ah]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004734",
        "label":"loc_10004734",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"and     eax, [ebp+arg_4]" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10004740",
    "label":"sub_10004740",
    "type":"idapro",
    "callees":[],
    "blocks":[
      {
        "tag":"sub_10004740",
        "label":"sub_10004740",
        "out_true":"loc_10004760",
        "out_false":"label_516",
        "last_inst":"jb",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    edi" },
          { "str":"push    esi" },
          { "str":"mov     esi, [ebp+arg_4]" },
          { "str":"mov     ecx, [ebp+arg_8]" },
          { "str":"mov     edi, [ebp+arg_0]" },
          { "str":"mov     eax, ecx" },
          { "str":"mov     edx, ecx" },
          { "str":"add     eax, esi" },
          { "str":"cmp     edi, esi" },
          { "str":"jbe     short loc_10004760" }
        ],
        "callees":[]
      },
{
        "tag":"label_516",
        "label":"label_516",
        "out_true":"loc_100048D8",
        "out_false":"loc_10004760",
        "last_inst":"jb",
        "instructions":[
          { "str":"cmp     edi, eax" },
          { "str":"jb      loc_100048D8" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004760",
        "label":"loc_10004760",
        "out_true":"loc_1000477C",
        "out_false":"label_517",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    edi, 3" },
          { "str":"jnz     short loc_1000477C" }
        ],
        "callees":[]
      },
{
        "tag":"label_517",
        "label":"label_517",
        "out_true":"loc_1000479C",
        "out_false":"label_518",
        "last_inst":"jb",
        "instructions":[
          { "str":"shr     ecx, 2" },
          { "str":"and     edx, 3" },
          { "str":"cmp     ecx, 8" },
          { "str":"jb      short loc_1000479C" }
        ],
        "callees":[]
      },
{
        "tag":"label_518",
        "label":"label_518",
        "out_true":"ds_off_10004888_edx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"rep movsd" },
          { "str":"jmp     ds:off_10004888[edx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000477C",
        "label":"loc_1000477C",
        "out_true":"loc_10004794",
        "out_false":"label_519",
        "last_inst":"jb",
        "instructions":[
          { "str":"mov     eax, edi" },
          { "str":"mov     edx, 3" },
          { "str":"sub     ecx, 4" },
          { "str":"jb      short loc_10004794" }
        ],
        "callees":[]
      },
{
        "tag":"label_519",
        "label":"label_519",
        "out_true":"ds_(loc_1000479C_4)_eax_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"and     eax, 3" },
          { "str":"add     ecx, eax" },
          { "str":"jmp     dword ptr ds:(loc_1000479C+4)[eax*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004794",
        "label":"loc_10004794",
        "out_true":"ds_loc_10004898_ecx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     dword ptr ds:loc_10004898[ecx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000479C",
        "label":"loc_1000479C",
        "out_true":"ds_off_1000481C_ecx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     ds:off_1000481C[ecx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100047B0",
        "label":"loc_100047B0",
        "out_true":"loc_1000479C",
        "out_false":"label_520",
        "last_inst":"jb",
        "instructions":[
          { "str":"and     edx, ecx" },
          { "str":"mov     al, [esi]" },
          { "str":"mov     [edi], al" },
          { "str":"mov     al, [esi+1]" },
          { "str":"mov     [edi+1], al" },
          { "str":"mov     al, [esi+2]" },
          { "str":"shr     ecx, 2" },
          { "str":"mov     [edi+2], al" },
          { "str":"add     esi, 3" },
          { "str":"add     edi, 3" },
          { "str":"cmp     ecx, 8" },
          { "str":"jb      short loc_1000479C" }
        ],
        "callees":[]
      },
{
        "tag":"label_520",
        "label":"label_520",
        "out_true":"ds_off_10004888_edx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"rep movsd" },
          { "str":"jmp     ds:off_10004888[edx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100047DC",
        "label":"loc_100047DC",
        "out_true":"loc_1000479C",
        "out_false":"label_521",
        "last_inst":"jb",
        "instructions":[
          { "str":"and     edx, ecx" },
          { "str":"mov     al, [esi]" },
          { "str":"mov     [edi], al" },
          { "str":"mov     al, [esi+1]" },
          { "str":"shr     ecx, 2" },
          { "str":"mov     [edi+1], al" },
          { "str":"add     esi, 2" },
          { "str":"add     edi, 2" },
          { "str":"cmp     ecx, 8" },
          { "str":"jb      short loc_1000479C" }
        ],
        "callees":[]
      },
{
        "tag":"label_521",
        "label":"label_521",
        "out_true":"ds_off_10004888_edx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"rep movsd" },
          { "str":"jmp     ds:off_10004888[edx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004800",
        "label":"loc_10004800",
        "out_true":"loc_1000479C",
        "out_false":"label_522",
        "last_inst":"jb",
        "instructions":[
          { "str":"and     edx, ecx" },
          { "str":"mov     al, [esi]" },
          { "str":"mov     [edi], al" },
          { "str":"inc     esi" },
          { "str":"shr     ecx, 2" },
          { "str":"inc     edi" },
          { "str":"cmp     ecx, 8" },
          { "str":"jb      short loc_1000479C" }
        ],
        "callees":[]
      },
{
        "tag":"label_522",
        "label":"label_522",
        "out_true":"ds_off_10004888_edx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"rep movsd" },
          { "str":"jmp     ds:off_10004888[edx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000483C",
        "label":"loc_1000483C",
        "out_true":"loc_10004844",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4-1Ch]" },
          { "str":"mov     [edi+ecx*4-1Ch], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004844",
        "label":"loc_10004844",
        "out_true":"loc_1000484C",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4-18h]" },
          { "str":"mov     [edi+ecx*4-18h], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000484C",
        "label":"loc_1000484C",
        "out_true":"loc_10004854",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4-14h]" },
          { "str":"mov     [edi+ecx*4-14h], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004854",
        "label":"loc_10004854",
        "out_true":"loc_1000485C",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4-10h]" },
          { "str":"mov     [edi+ecx*4-10h], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000485C",
        "label":"loc_1000485C",
        "out_true":"loc_10004864",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4-0Ch]" },
          { "str":"mov     [edi+ecx*4-0Ch], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004864",
        "label":"loc_10004864",
        "out_true":"loc_1000486C",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4-8]" },
          { "str":"mov     [edi+ecx*4-8], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000486C",
        "label":"loc_1000486C",
        "out_true":"loc_1000487F",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4-4]" },
          { "str":"mov     [edi+ecx*4-4], eax" },
          { "str":"lea     eax, ds:0[ecx*4]" },
          { "str":"add     esi, eax" },
          { "str":"add     edi, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000487F",
        "label":"loc_1000487F",
        "out_true":"ds_off_10004888_edx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     ds:off_10004888[edx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004898",
        "label":"loc_10004898",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100048A0",
        "label":"loc_100048A0",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     al, [esi]" },
          { "str":"mov     [edi], al" },
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100048AC",
        "label":"loc_100048AC",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     al, [esi]" },
          { "str":"mov     [edi], al" },
          { "str":"mov     al, [esi+1]" },
          { "str":"mov     [edi+1], al" },
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100048C0",
        "label":"loc_100048C0",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     al, [esi]" },
          { "str":"mov     [edi], al" },
          { "str":"mov     al, [esi+1]" },
          { "str":"mov     [edi+1], al" },
          { "str":"mov     al, [esi+2]" },
          { "str":"mov     [edi+2], al" },
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100048D8",
        "label":"loc_100048D8",
        "out_true":"loc_1000490C",
        "out_false":"label_523",
        "last_inst":"jnz",
        "instructions":[
          { "str":"lea     esi, [ecx+esi-4]" },
          { "str":"lea     edi, [ecx+edi-4]" },
          { "str":"test    edi, 3" },
          { "str":"jnz     short loc_1000490C" }
        ],
        "callees":[]
      },
{
        "tag":"label_523",
        "label":"label_523",
        "out_true":"loc_10004900",
        "out_false":"label_524",
        "last_inst":"jb",
        "instructions":[
          { "str":"shr     ecx, 2" },
          { "str":"and     edx, 3" },
          { "str":"cmp     ecx, 8" },
          { "str":"jb      short loc_10004900" }
        ],
        "callees":[]
      },
{
        "tag":"label_524",
        "label":"label_524",
        "out_true":"ds_off_10004A20_edx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"std" },
          { "str":"rep movsd" },
          { "str":"cld" },
          { "str":"jmp     ds:off_10004A20[edx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004900",
        "label":"loc_10004900",
        "out_true":"ds_off_100049D0_ecx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"neg     ecx" },
          { "str":"jmp     ds:off_100049D0[ecx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_1000490C",
        "label":"loc_1000490C",
        "out_true":"loc_10004924",
        "out_false":"label_525",
        "last_inst":"jb",
        "instructions":[
          { "str":"mov     eax, edi" },
          { "str":"mov     edx, 3" },
          { "str":"cmp     ecx, 4" },
          { "str":"jb      short loc_10004924" }
        ],
        "callees":[]
      },
{
        "tag":"label_525",
        "label":"label_525",
        "out_true":"ds_(loc_10004924_4)_eax_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"and     eax, 3" },
          { "str":"sub     ecx, eax" },
          { "str":"jmp     dword ptr ds:(loc_10004924+4)[eax*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004924",
        "label":"loc_10004924",
        "out_true":"ds_off_10004A20_ecx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     ds:off_10004A20[ecx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004938",
        "label":"loc_10004938",
        "out_true":"loc_10004900",
        "out_false":"label_526",
        "last_inst":"jb",
        "instructions":[
          { "str":"mov     al, [esi+3]" },
          { "str":"and     edx, ecx" },
          { "str":"mov     [edi+3], al" },
          { "str":"dec     esi" },
          { "str":"shr     ecx, 2" },
          { "str":"dec     edi" },
          { "str":"cmp     ecx, 8" },
          { "str":"jb      short loc_10004900" }
        ],
        "callees":[]
      },
{
        "tag":"label_526",
        "label":"label_526",
        "out_true":"ds_off_10004A20_edx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"std" },
          { "str":"rep movsd" },
          { "str":"cld" },
          { "str":"jmp     ds:off_10004A20[edx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004958",
        "label":"loc_10004958",
        "out_true":"loc_10004900",
        "out_false":"label_527",
        "last_inst":"jb",
        "instructions":[
          { "str":"mov     al, [esi+3]" },
          { "str":"and     edx, ecx" },
          { "str":"mov     [edi+3], al" },
          { "str":"mov     al, [esi+2]" },
          { "str":"shr     ecx, 2" },
          { "str":"mov     [edi+2], al" },
          { "str":"sub     esi, 2" },
          { "str":"sub     edi, 2" },
          { "str":"cmp     ecx, 8" },
          { "str":"jb      short loc_10004900" }
        ],
        "callees":[]
      },
{
        "tag":"label_527",
        "label":"label_527",
        "out_true":"ds_off_10004A20_edx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"std" },
          { "str":"rep movsd" },
          { "str":"cld" },
          { "str":"jmp     ds:off_10004A20[edx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004980",
        "label":"loc_10004980",
        "out_true":"loc_10004900",
        "out_false":"label_528",
        "last_inst":"jb",
        "instructions":[
          { "str":"mov     al, [esi+3]" },
          { "str":"and     edx, ecx" },
          { "str":"mov     [edi+3], al" },
          { "str":"mov     al, [esi+2]" },
          { "str":"mov     [edi+2], al" },
          { "str":"mov     al, [esi+1]" },
          { "str":"shr     ecx, 2" },
          { "str":"mov     [edi+1], al" },
          { "str":"sub     esi, 3" },
          { "str":"sub     edi, 3" },
          { "str":"cmp     ecx, 8" },
          { "str":"jb      loc_10004900" }
        ],
        "callees":[]
      },
{
        "tag":"label_528",
        "label":"label_528",
        "out_true":"ds_off_10004A20_edx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"std" },
          { "str":"rep movsd" },
          { "str":"cld" },
          { "str":"jmp     ds:off_10004A20[edx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100049D4",
        "label":"loc_100049D4",
        "out_true":"loc_100049DC",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4+1Ch]" },
          { "str":"mov     [edi+ecx*4+1Ch], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100049DC",
        "label":"loc_100049DC",
        "out_true":"loc_100049E4",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4+18h]" },
          { "str":"mov     [edi+ecx*4+18h], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100049E4",
        "label":"loc_100049E4",
        "out_true":"loc_100049EC",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4+14h]" },
          { "str":"mov     [edi+ecx*4+14h], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100049EC",
        "label":"loc_100049EC",
        "out_true":"loc_100049F4",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4+10h]" },
          { "str":"mov     [edi+ecx*4+10h], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100049F4",
        "label":"loc_100049F4",
        "out_true":"loc_100049FC",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4+0Ch]" },
          { "str":"mov     [edi+ecx*4+0Ch], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_100049FC",
        "label":"loc_100049FC",
        "out_true":"loc_10004A04",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4+8]" },
          { "str":"mov     [edi+ecx*4+8], eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004A04",
        "label":"loc_10004A04",
        "out_true":"loc_10004A17",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, [esi+ecx*4+4]" },
          { "str":"mov     [edi+ecx*4+4], eax" },
          { "str":"lea     eax, ds:0[ecx*4]" },
          { "str":"add     esi, eax" },
          { "str":"add     edi, eax" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004A17",
        "label":"loc_10004A17",
        "out_true":"ds_off_10004A20_edx_4_",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"jmp     ds:off_10004A20[edx*4]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004A30",
        "label":"loc_10004A30",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004A38",
        "label":"loc_10004A38",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     al, [esi+3]" },
          { "str":"mov     [edi+3], al" },
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004A48",
        "label":"loc_10004A48",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     al, [esi+3]" },
          { "str":"mov     [edi+3], al" },
          { "str":"mov     al, [esi+2]" },
          { "str":"mov     [edi+2], al" },
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004A5C",
        "label":"loc_10004A5C",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     al, [esi+3]" },
          { "str":"mov     [edi+3], al" },
          { "str":"mov     al, [esi+2]" },
          { "str":"mov     [edi+2], al" },
          { "str":"mov     al, [esi+1]" },
          { "str":"mov     [edi+1], al" },
          { "str":"mov     eax, [ebp+arg_0]" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"rtn_8",
    "label":"rtn_8",
    "type":"ours",
    "callees":[
      { "tag":"sub_10001F46" },
      { "tag":"sub_10001FA7" },
      { "tag":"sub_10004E55" }
    ],
    "blocks":[
      {
        "tag":"blk_529",
        "label":"blk_529",
        "out_true":"loc_10004ACC",
        "out_false":"loc_10004A90",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     edx, [esp+4]" },
          { "str":"mov     ecx, [esp+8]" },
          { "str":"test    edx, 3" },
          { "str":"jnz     short loc_10004ACC" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004A90",
        "label":"loc_10004A90",
        "out_true":"loc_10004AC4",
        "out_false":"label_530",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     eax, [edx]" },
          { "str":"cmp     al, [ecx]" },
          { "str":"jnz     short loc_10004AC4" }
        ],
        "callees":[]
      },
{
        "tag":"label_530",
        "label":"label_530",
        "out_true":"loc_10004AC0",
        "out_false":"label_531",
        "last_inst":"jz",
        "instructions":[
          { "str":"or      al, al" },
          { "str":"jz      short loc_10004AC0" }
        ],
        "callees":[]
      },
{
        "tag":"label_531",
        "label":"label_531",
        "out_true":"loc_10004AC4",
        "out_false":"label_532",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     ah, [ecx+1]" },
          { "str":"jnz     short loc_10004AC4" }
        ],
        "callees":[]
      },
{
        "tag":"label_532",
        "label":"label_532",
        "out_true":"loc_10004AC0",
        "out_false":"label_533",
        "last_inst":"jz",
        "instructions":[
          { "str":"or      ah, ah" },
          { "str":"jz      short loc_10004AC0" }
        ],
        "callees":[]
      },
{
        "tag":"label_533",
        "label":"label_533",
        "out_true":"loc_10004AC4",
        "out_false":"label_534",
        "last_inst":"jnz",
        "instructions":[
          { "str":"shr     eax, 10h" },
          { "str":"cmp     al, [ecx+2]" },
          { "str":"jnz     short loc_10004AC4" }
        ],
        "callees":[]
      },
{
        "tag":"label_534",
        "label":"label_534",
        "out_true":"loc_10004AC0",
        "out_false":"label_535",
        "last_inst":"jz",
        "instructions":[
          { "str":"or      al, al" },
          { "str":"jz      short loc_10004AC0" }
        ],
        "callees":[]
      },
{
        "tag":"label_535",
        "label":"label_535",
        "out_true":"loc_10004AC4",
        "out_false":"label_536",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     ah, [ecx+3]" },
          { "str":"jnz     short loc_10004AC4" }
        ],
        "callees":[]
      },
{
        "tag":"label_536",
        "label":"label_536",
        "out_true":"loc_10004A90",
        "out_false":"label_537",
        "last_inst":"jnz",
        "instructions":[
          { "str":"add     ecx, 4" },
          { "str":"add     edx, 4" },
          { "str":"or      ah, ah" },
          { "str":"jnz     short loc_10004A90" }
        ],
        "callees":[]
      },
{
        "tag":"label_537",
        "label":"label_537",
        "out_true":"loc_10004AC0",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     edi, edi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004AC0",
        "label":"loc_10004AC0",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"xor     eax, eax" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004AC4",
        "label":"loc_10004AC4",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"sbb     eax, eax" },
          { "str":"shl     eax, 1" },
          { "str":"inc     eax" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004ACC",
        "label":"loc_10004ACC",
        "out_true":"loc_10004AE8",
        "out_false":"label_538",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    edx, 1" },
          { "str":"jz      short loc_10004AE8" }
        ],
        "callees":[]
      },
{
        "tag":"label_538",
        "label":"label_538",
        "out_true":"loc_10004AC4",
        "out_false":"label_539",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     al, [edx]" },
          { "str":"inc     edx" },
          { "str":"cmp     al, [ecx]" },
          { "str":"jnz     short loc_10004AC4" }
        ],
        "callees":[]
      },
{
        "tag":"label_539",
        "label":"label_539",
        "out_true":"loc_10004AC0",
        "out_false":"label_540",
        "last_inst":"jz",
        "instructions":[
          { "str":"inc     ecx" },
          { "str":"or      al, al" },
          { "str":"jz      short loc_10004AC0" }
        ],
        "callees":[]
      },
{
        "tag":"label_540",
        "label":"label_540",
        "out_true":"loc_10004A90",
        "out_false":"loc_10004AE8",
        "last_inst":"jz",
        "instructions":[
          { "str":"test    edx, 2" },
          { "str":"jz      short loc_10004A90" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004AE8",
        "label":"loc_10004AE8",
        "out_true":"loc_10004AC4",
        "out_false":"label_541",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ax, [edx]" },
          { "str":"add     edx, 2" },
          { "str":"cmp     al, [ecx]" },
          { "str":"jnz     short loc_10004AC4" }
        ],
        "callees":[]
      },
{
        "tag":"label_541",
        "label":"label_541",
        "out_true":"loc_10004AC0",
        "out_false":"label_542",
        "last_inst":"jz",
        "instructions":[
          { "str":"or      al, al" },
          { "str":"jz      short loc_10004AC0" }
        ],
        "callees":[]
      },
{
        "tag":"label_542",
        "label":"label_542",
        "out_true":"loc_10004AC4",
        "out_false":"label_543",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     ah, [ecx+1]" },
          { "str":"jnz     short loc_10004AC4" }
        ],
        "callees":[]
      },
{
        "tag":"label_543",
        "label":"label_543",
        "out_true":"loc_10004AC0",
        "out_false":"label_544",
        "last_inst":"jz",
        "instructions":[
          { "str":"or      ah, ah" },
          { "str":"jz      short loc_10004AC0" }
        ],
        "callees":[]
      },
{
        "tag":"label_544",
        "label":"label_544",
        "out_true":"loc_10004A90",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"add     ecx, 2" },
          { "str":"jmp     short loc_10004A90" }
        ],
        "callees":[]
      },
{
        "tag":"label_545",
        "label":"label_545",
        "out_true":"loc_10004B24",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    esi" },
          { "str":"xor     eax, eax" },
          { "str":"push    eax" },
          { "str":"push    eax" },
          { "str":"push    eax" },
          { "str":"push    eax" },
          { "str":"push    eax" },
          { "str":"push    eax" },
          { "str":"push    eax" },
          { "str":"push    eax" },
          { "str":"mov     edx, [ebp+0Ch]" },
          { "str":"lea     ecx, [ecx+0]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004B24",
        "label":"loc_10004B24",
        "out_true":"loc_10004B31",
        "out_false":"label_546",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     al, [edx]" },
          { "str":"or      al, al" },
          { "str":"jz      short loc_10004B31" }
        ],
        "callees":[]
      },
{
        "tag":"label_546",
        "label":"label_546",
        "out_true":"loc_10004B24",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"inc     edx" },
          { "str":"bts     [esp], eax" },
          { "str":"jmp     short loc_10004B24" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004B31",
        "label":"loc_10004B31",
        "out_true":"loc_10004B38",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     esi, [ebp+8]" },
          { "str":"or      ecx, 0FFFFFFFFh" },
          { "str":"nop" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004B38",
        "label":"loc_10004B38",
        "out_true":"loc_10004B46",
        "out_false":"label_547",
        "last_inst":"jz",
        "instructions":[
          { "str":"inc     ecx" },
          { "str":"mov     al, [esi]" },
          { "str":"or      al, al" },
          { "str":"jz      short loc_10004B46" }
        ],
        "callees":[]
      },
{
        "tag":"label_547",
        "label":"label_547",
        "out_true":"loc_10004B38",
        "out_false":"loc_10004B46",
        "last_inst":"jnb",
        "instructions":[
          { "str":"inc     esi" },
          { "str":"bt      [esp], eax" },
          { "str":"jnb     short loc_10004B38" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004B46",
        "label":"loc_10004B46",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, ecx" },
          { "str":"add     esp, 20h" },
          { "str":"pop     esi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"label_548",
        "label":"label_548",
        "out_true":"loc_10004B64",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    esi" },
          { "str":"xor     eax, eax" },
          { "str":"push    eax" },
          { "str":"push    eax" },
          { "str":"push    eax" },
          { "str":"push    eax" },
          { "str":"push    eax" },
          { "str":"push    eax" },
          { "str":"push    eax" },
          { "str":"push    eax" },
          { "str":"mov     edx, [ebp+0Ch]" },
          { "str":"lea     ecx, [ecx+0]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004B64",
        "label":"loc_10004B64",
        "out_true":"loc_10004B71",
        "out_false":"label_549",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     al, [edx]" },
          { "str":"or      al, al" },
          { "str":"jz      short loc_10004B71" }
        ],
        "callees":[]
      },
{
        "tag":"label_549",
        "label":"label_549",
        "out_true":"loc_10004B64",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"inc     edx" },
          { "str":"bts     [esp], eax" },
          { "str":"jmp     short loc_10004B64" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004B71",
        "label":"loc_10004B71",
        "out_true":"loc_10004B74",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     esi, [ebp+8]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004B74",
        "label":"loc_10004B74",
        "out_true":"loc_10004B84",
        "out_false":"label_550",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     al, [esi]" },
          { "str":"or      al, al" },
          { "str":"jz      short loc_10004B84" }
        ],
        "callees":[]
      },
{
        "tag":"label_550",
        "label":"label_550",
        "out_true":"loc_10004B74",
        "out_false":"label_551",
        "last_inst":"jnb",
        "instructions":[
          { "str":"inc     esi" },
          { "str":"bt      [esp], eax" },
          { "str":"jnb     short loc_10004B74" }
        ],
        "callees":[]
      },
{
        "tag":"label_551",
        "label":"label_551",
        "out_true":"loc_10004B84",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"lea     eax, [esi-1]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004B84",
        "label":"loc_10004B84",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"add     esp, 20h" },
          { "str":"pop     esi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"label_552",
        "label":"label_552",
        "out_true":"loc_10004BE3",
        "out_false":"label_553",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    edi" },
          { "str":"push    esi" },
          { "str":"push    ebx" },
          { "str":"mov     esi, [ebp+0Ch]" },
          { "str":"mov     edi, [ebp+8]" },
          { "str":"lea     eax, unk_10008C1C" },
          { "str":"cmp     dword ptr [eax+8], 0" },
          { "str":"jnz     short loc_10004BE3" }
        ],
        "callees":[]
      },
{
        "tag":"label_553",
        "label":"label_553",
        "out_true":"loc_10004BAC",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     al, 0FFh" },
          { "str":"mov     edi, edi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004BAC",
        "label":"loc_10004BAC",
        "out_true":"loc_10004BDE",
        "out_false":"label_554",
        "last_inst":"jz",
        "instructions":[
          { "str":"or      al, al" },
          { "str":"jz      short loc_10004BDE" }
        ],
        "callees":[]
      },
{
        "tag":"label_554",
        "label":"label_554",
        "out_true":"loc_10004BAC",
        "out_false":"label_555",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     al, [esi]" },
          { "str":"inc     esi" },
          { "str":"mov     ah, [edi]" },
          { "str":"inc     edi" },
          { "str":"cmp     ah, al" },
          { "str":"jz      short loc_10004BAC" }
        ],
        "callees":[]
      },
{
        "tag":"label_555",
        "label":"label_555",
        "out_true":"loc_10004BAC",
        "out_false":"label_556",
        "last_inst":"jz",
        "instructions":[
          { "str":"sub     al, 41h" },
          { "str":"cmp     al, 1Ah" },
          { "str":"sbb     cl, cl" },
          { "str":"and     cl, 20h" },
          { "str":"add     al, cl" },
          { "str":"add     al, 41h" },
          { "str":"xchg    ah, al" },
          { "str":"sub     al, 41h" },
          { "str":"cmp     al, 1Ah" },
          { "str":"sbb     cl, cl" },
          { "str":"and     cl, 20h" },
          { "str":"add     al, cl" },
          { "str":"add     al, 41h" },
          { "str":"cmp     al, ah" },
          { "str":"jz      short loc_10004BAC" }
        ],
        "callees":[]
      },
{
        "tag":"label_556",
        "label":"label_556",
        "out_true":"loc_10004BDE",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"sbb     al, al" },
          { "str":"sbb     al, 0FFh" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004BDE",
        "label":"loc_10004BDE",
        "out_true":"loc_10004C5B",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"movsx   eax, al" },
          { "str":"jmp     short loc_10004C5B" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004BE3",
        "label":"loc_10004BE3",
        "out_true":"loc_10004BF7",
        "out_false":"label_557",
        "last_inst":"jg",
        "instructions":[
          { "str":"lock inc Addend" },
          { "str":"cmp     dword_10008D90, 0" },
          { "str":"jg      short loc_10004BF7" }
        ],
        "callees":[]
      },
{
        "tag":"label_557",
        "label":"label_557",
        "out_true":"loc_10004C0C",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    0" },
          { "str":"jmp     short loc_10004C0C" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004BF7",
        "label":"loc_10004BF7",
        "out_true":"loc_10004C0C",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"lock dec Addend" },
          { "str":"push    13h" },
          { "str":"call    sub_10001F46" },
          { "str":"mov     dword ptr [esp], 1" }
        ],
        "callees":[
          { "tag":"sub_10001F46" }
        ]
      },
{
        "tag":"loc_10004C0C",
        "label":"loc_10004C0C",
        "out_true":"loc_10004C14",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, 0FFh" },
          { "str":"xor     ebx, ebx" },
          { "str":"nop" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004C14",
        "label":"loc_10004C14",
        "out_true":"loc_10004C3F",
        "out_false":"label_558",
        "last_inst":"jz",
        "instructions":[
          { "str":"or      al, al" },
          { "str":"jz      short loc_10004C3F" }
        ],
        "callees":[]
      },
{
        "tag":"label_558",
        "label":"label_558",
        "out_true":"loc_10004C14",
        "out_false":"label_559",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     al, [esi]" },
          { "str":"inc     esi" },
          { "str":"mov     bl, [edi]" },
          { "str":"inc     edi" },
          { "str":"cmp     al, bl" },
          { "str":"jz      short loc_10004C14" }
        ],
        "callees":[]
      },
{
        "tag":"label_559",
        "label":"label_559",
        "out_true":"loc_10004C14",
        "out_false":"label_560",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    eax" },
          { "str":"push    ebx" },
          { "str":"call    sub_10004E55" },
          { "str":"mov     ebx, eax" },
          { "str":"add     esp, 4" },
          { "str":"call    sub_10004E55" },
          { "str":"add     esp, 4" },
          { "str":"cmp     bl, al" },
          { "str":"jz      short loc_10004C14" }
        ],
        "callees":[
          { "tag":"sub_10004E55" }
        ]
      },
{
        "tag":"label_560",
        "label":"label_560",
        "out_true":"loc_10004C3F",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"sbb     eax, eax" },
          { "str":"sbb     eax, 0FFFFFFFFh" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004C3F",
        "label":"loc_10004C3F",
        "out_true":"loc_10004C4F",
        "out_false":"label_561",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     ebx, eax" },
          { "str":"pop     eax" },
          { "str":"or      eax, eax" },
          { "str":"jnz     short loc_10004C4F" }
        ],
        "callees":[]
      },
{
        "tag":"label_561",
        "label":"label_561",
        "out_true":"loc_10004C59",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"lock dec Addend" },
          { "str":"jmp     short loc_10004C59" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004C4F",
        "label":"loc_10004C4F",
        "out_true":"loc_10004C59",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"push    13h" },
          { "str":"call    sub_10001FA7" },
          { "str":"add     esp, 4" }
        ],
        "callees":[
          { "tag":"sub_10001FA7" }
        ]
      },
{
        "tag":"loc_10004C59",
        "label":"loc_10004C59",
        "out_true":"loc_10004C5B",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, ebx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004C5B",
        "label":"loc_10004C5B",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     ebx" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"label_562",
        "label":"label_562",
        "out_true":"loc_10004D5A",
        "out_false":"label_563",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    edi" },
          { "str":"push    esi" },
          { "str":"push    ebx" },
          { "str":"mov     ecx, [ebp+10h]" },
          { "str":"or      ecx, ecx" },
          { "str":"jz      loc_10004D5A" }
        ],
        "callees":[]
      },
{
        "tag":"label_563",
        "label":"label_563",
        "out_true":"loc_10004CD1",
        "out_false":"label_564",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     esi, [ebp+8]" },
          { "str":"mov     edi, [ebp+0Ch]" },
          { "str":"lea     eax, unk_10008C1C" },
          { "str":"cmp     dword ptr [eax+8], 0" },
          { "str":"jnz     short loc_10004CD1" }
        ],
        "callees":[]
      },
{
        "tag":"label_564",
        "label":"label_564",
        "out_true":"loc_10004C8C",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     bh, 41h" },
          { "str":"mov     bl, 5Ah" },
          { "str":"mov     dh, 20h" },
          { "str":"lea     ecx, [ecx+0]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004C8C",
        "label":"loc_10004C8C",
        "out_true":"loc_10004CB5",
        "out_false":"label_565",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     ah, [esi]" },
          { "str":"or      ah, ah" },
          { "str":"mov     al, [edi]" },
          { "str":"jz      short loc_10004CB5" }
        ],
        "callees":[]
      },
{
        "tag":"label_565",
        "label":"label_565",
        "out_true":"loc_10004CB5",
        "out_false":"label_566",
        "last_inst":"jz",
        "instructions":[
          { "str":"or      al, al" },
          { "str":"jz      short loc_10004CB5" }
        ],
        "callees":[]
      },
{
        "tag":"label_566",
        "label":"label_566",
        "out_true":"loc_10004CA4",
        "out_false":"label_567",
        "last_inst":"jb",
        "instructions":[
          { "str":"inc     esi" },
          { "str":"inc     edi" },
          { "str":"cmp     ah, bh" },
          { "str":"jb      short loc_10004CA4" }
        ],
        "callees":[]
      },
{
        "tag":"label_567",
        "label":"label_567",
        "out_true":"loc_10004CA4",
        "out_false":"label_568",
        "last_inst":"ja",
        "instructions":[
          { "str":"cmp     ah, bl" },
          { "str":"ja      short loc_10004CA4" }
        ],
        "callees":[]
      },
{
        "tag":"label_568",
        "label":"label_568",
        "out_true":"loc_10004CA4",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"add     ah, dh" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004CA4",
        "label":"loc_10004CA4",
        "out_true":"loc_10004CAE",
        "out_false":"label_569",
        "last_inst":"jb",
        "instructions":[
          { "str":"cmp     al, bh" },
          { "str":"jb      short loc_10004CAE" }
        ],
        "callees":[]
      },
{
        "tag":"label_569",
        "label":"label_569",
        "out_true":"loc_10004CAE",
        "out_false":"label_570",
        "last_inst":"ja",
        "instructions":[
          { "str":"cmp     al, bl" },
          { "str":"ja      short loc_10004CAE" }
        ],
        "callees":[]
      },
{
        "tag":"label_570",
        "label":"label_570",
        "out_true":"loc_10004CAE",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"add     al, dh" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004CAE",
        "label":"loc_10004CAE",
        "out_true":"loc_10004CBF",
        "out_false":"label_571",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     ah, al" },
          { "str":"jnz     short loc_10004CBF" }
        ],
        "callees":[]
      },
{
        "tag":"label_571",
        "label":"label_571",
        "out_true":"loc_10004C8C",
        "out_false":"loc_10004CB5",
        "last_inst":"jnz",
        "instructions":[
          { "str":"dec     ecx" },
          { "str":"jnz     short loc_10004C8C" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004CB5",
        "label":"loc_10004CB5",
        "out_true":"loc_10004D5A",
        "out_false":"loc_10004CBF",
        "last_inst":"jz",
        "instructions":[
          { "str":"xor     ecx, ecx" },
          { "str":"cmp     ah, al" },
          { "str":"jz      loc_10004D5A" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004CBF",
        "label":"loc_10004CBF",
        "out_true":"loc_10004D5A",
        "out_false":"label_572",
        "last_inst":"jb",
        "instructions":[
          { "str":"mov     ecx, 0FFFFFFFFh" },
          { "str":"jb      loc_10004D5A" }
        ],
        "callees":[]
      },
{
        "tag":"label_572",
        "label":"label_572",
        "out_true":"loc_10004D5A",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"neg     ecx" },
          { "str":"jmp     loc_10004D5A" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004CD1",
        "label":"loc_10004CD1",
        "out_true":"loc_10004CE5",
        "out_false":"label_573",
        "last_inst":"jg",
        "instructions":[
          { "str":"lock inc Addend" },
          { "str":"cmp     dword_10008D90, 0" },
          { "str":"jg      short loc_10004CE5" }
        ],
        "callees":[]
      },
{
        "tag":"label_573",
        "label":"label_573",
        "out_true":"loc_10004CFE",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    0" },
          { "str":"jmp     short loc_10004CFE" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004CE5",
        "label":"loc_10004CE5",
        "out_true":"loc_10004CFE",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"lock dec Addend" },
          { "str":"mov     ebx, ecx" },
          { "str":"push    13h" },
          { "str":"call    sub_10001F46" },
          { "str":"mov     dword ptr [esp], 1" },
          { "str":"mov     ecx, ebx" }
        ],
        "callees":[
          { "tag":"sub_10001F46" }
        ]
      },
{
        "tag":"loc_10004CFE",
        "label":"loc_10004CFE",
        "out_true":"loc_10004D04",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     eax, eax" },
          { "str":"xor     ebx, ebx" },
          { "str":"mov     edi, edi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004D04",
        "label":"loc_10004D04",
        "out_true":"loc_10004D2F",
        "out_false":"label_574",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     al, [esi]" },
          { "str":"or      eax, eax" },
          { "str":"mov     bl, [edi]" },
          { "str":"jz      short loc_10004D2F" }
        ],
        "callees":[]
      },
{
        "tag":"label_574",
        "label":"label_574",
        "out_true":"loc_10004D2F",
        "out_false":"label_575",
        "last_inst":"jz",
        "instructions":[
          { "str":"or      ebx, ebx" },
          { "str":"jz      short loc_10004D2F" }
        ],
        "callees":[]
      },
{
        "tag":"label_575",
        "label":"label_575",
        "out_true":"loc_10004D35",
        "out_false":"label_576",
        "last_inst":"jnz",
        "instructions":[
          { "str":"inc     esi" },
          { "str":"inc     edi" },
          { "str":"push    ecx" },
          { "str":"push    eax" },
          { "str":"push    ebx" },
          { "str":"call    sub_10004E55" },
          { "str":"mov     ebx, eax" },
          { "str":"add     esp, 4" },
          { "str":"call    sub_10004E55" },
          { "str":"add     esp, 4" },
          { "str":"pop     ecx" },
          { "str":"cmp     eax, ebx" },
          { "str":"jnz     short loc_10004D35" }
        ],
        "callees":[
          { "tag":"sub_10004E55" }
        ]
      },
{
        "tag":"label_576",
        "label":"label_576",
        "out_true":"loc_10004D04",
        "out_false":"loc_10004D2F",
        "last_inst":"jnz",
        "instructions":[
          { "str":"dec     ecx" },
          { "str":"jnz     short loc_10004D04" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004D2F",
        "label":"loc_10004D2F",
        "out_true":"loc_10004D3E",
        "out_false":"loc_10004D35",
        "last_inst":"jz",
        "instructions":[
          { "str":"xor     ecx, ecx" },
          { "str":"cmp     eax, ebx" },
          { "str":"jz      short loc_10004D3E" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004D35",
        "label":"loc_10004D35",
        "out_true":"loc_10004D3E",
        "out_false":"label_577",
        "last_inst":"jb",
        "instructions":[
          { "str":"mov     ecx, 0FFFFFFFFh" },
          { "str":"jb      short loc_10004D3E" }
        ],
        "callees":[]
      },
{
        "tag":"label_577",
        "label":"label_577",
        "out_true":"loc_10004D3E",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"neg     ecx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004D3E",
        "label":"loc_10004D3E",
        "out_true":"loc_10004D4C",
        "out_false":"label_578",
        "last_inst":"jnz",
        "instructions":[
          { "str":"pop     eax" },
          { "str":"or      eax, eax" },
          { "str":"jnz     short loc_10004D4C" }
        ],
        "callees":[]
      },
{
        "tag":"label_578",
        "label":"label_578",
        "out_true":"loc_10004D5A",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"lock dec Addend" },
          { "str":"jmp     short loc_10004D5A" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004D4C",
        "label":"loc_10004D4C",
        "out_true":"loc_10004D5A",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ebx, ecx" },
          { "str":"push    13h" },
          { "str":"call    sub_10001FA7" },
          { "str":"add     esp, 4" },
          { "str":"mov     ecx, ebx" }
        ],
        "callees":[
          { "tag":"sub_10001FA7" }
        ]
      },
{
        "tag":"loc_10004D5A",
        "label":"loc_10004D5A",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, ecx" },
          { "str":"pop     ebx" },
          { "str":"pop     esi" },
          { "str":"pop     edi" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      },
{
        "tag":"label_579",
        "label":"label_579",
        "out_true":"loc_10004D92",
        "out_false":"label_580",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"mov     eax, [esp+18h]" },
          { "str":"or      eax, eax" },
          { "str":"jnz     short loc_10004D92" }
        ],
        "callees":[]
      },
{
        "tag":"label_580",
        "label":"label_580",
        "out_true":"loc_10004DD3",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     ecx, [esp+14h]" },
          { "str":"mov     eax, [esp+10h]" },
          { "str":"xor     edx, edx" },
          { "str":"div     ecx" },
          { "str":"mov     ebx, eax" },
          { "str":"mov     eax, [esp+0Ch]" },
          { "str":"div     ecx" },
          { "str":"mov     edx, ebx" },
          { "str":"jmp     short loc_10004DD3" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004D92",
        "label":"loc_10004D92",
        "out_true":"loc_10004DA0",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ecx, eax" },
          { "str":"mov     ebx, [esp+14h]" },
          { "str":"mov     edx, [esp+10h]" },
          { "str":"mov     eax, [esp+0Ch]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004DA0",
        "label":"loc_10004DA0",
        "out_true":"loc_10004DA0",
        "out_false":"label_581",
        "last_inst":"jnz",
        "instructions":[
          { "str":"shr     ecx, 1" },
          { "str":"rcr     ebx, 1" },
          { "str":"shr     edx, 1" },
          { "str":"rcr     eax, 1" },
          { "str":"or      ecx, ecx" },
          { "str":"jnz     short loc_10004DA0" }
        ],
        "callees":[]
      },
{
        "tag":"label_581",
        "label":"label_581",
        "out_true":"loc_10004DCE",
        "out_false":"label_582",
        "last_inst":"jb",
        "instructions":[
          { "str":"div     ebx" },
          { "str":"mov     esi, eax" },
          { "str":"mul     dword ptr [esp+18h]" },
          { "str":"mov     ecx, eax" },
          { "str":"mov     eax, [esp+14h]" },
          { "str":"mul     esi" },
          { "str":"add     edx, ecx" },
          { "str":"jb      short loc_10004DCE" }
        ],
        "callees":[]
      },
{
        "tag":"label_582",
        "label":"label_582",
        "out_true":"loc_10004DCE",
        "out_false":"label_583",
        "last_inst":"ja",
        "instructions":[
          { "str":"cmp     edx, [esp+10h]" },
          { "str":"ja      short loc_10004DCE" }
        ],
        "callees":[]
      },
{
        "tag":"label_583",
        "label":"label_583",
        "out_true":"loc_10004DCF",
        "out_false":"label_584",
        "last_inst":"jb",
        "instructions":[
          { "str":"jb      short loc_10004DCF" }
        ],
        "callees":[]
      },
{
        "tag":"label_584",
        "label":"label_584",
        "out_true":"loc_10004DCF",
        "out_false":"loc_10004DCE",
        "last_inst":"jb",
        "instructions":[
          { "str":"cmp     eax, [esp+0Ch]" },
          { "str":"jbe     short loc_10004DCF" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004DCE",
        "label":"loc_10004DCE",
        "out_true":"loc_10004DCF",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"dec     esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004DCF",
        "label":"loc_10004DCF",
        "out_true":"loc_10004DD3",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"xor     edx, edx" },
          { "str":"mov     eax, esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004DD3",
        "label":"loc_10004DD3",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"retn    10h" }
        ],
        "callees":[]
      },
{
        "tag":"label_585",
        "label":"label_585",
        "out_true":"loc_10004E01",
        "out_false":"label_586",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"mov     eax, [esp+14h]" },
          { "str":"or      eax, eax" },
          { "str":"jnz     short loc_10004E01" }
        ],
        "callees":[]
      },
{
        "tag":"label_586",
        "label":"label_586",
        "out_true":"loc_10004E51",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     ecx, [esp+10h]" },
          { "str":"mov     eax, [esp+0Ch]" },
          { "str":"xor     edx, edx" },
          { "str":"div     ecx" },
          { "str":"mov     eax, [esp+8]" },
          { "str":"div     ecx" },
          { "str":"mov     eax, edx" },
          { "str":"xor     edx, edx" },
          { "str":"jmp     short loc_10004E51" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004E01",
        "label":"loc_10004E01",
        "out_true":"loc_10004E0F",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     ecx, eax" },
          { "str":"mov     ebx, [esp+10h]" },
          { "str":"mov     edx, [esp+0Ch]" },
          { "str":"mov     eax, [esp+8]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004E0F",
        "label":"loc_10004E0F",
        "out_true":"loc_10004E0F",
        "out_false":"label_587",
        "last_inst":"jnz",
        "instructions":[
          { "str":"shr     ecx, 1" },
          { "str":"rcr     ebx, 1" },
          { "str":"shr     edx, 1" },
          { "str":"rcr     eax, 1" },
          { "str":"or      ecx, ecx" },
          { "str":"jnz     short loc_10004E0F" }
        ],
        "callees":[]
      },
{
        "tag":"label_587",
        "label":"label_587",
        "out_true":"loc_10004E3A",
        "out_false":"label_588",
        "last_inst":"jb",
        "instructions":[
          { "str":"div     ebx" },
          { "str":"mov     ecx, eax" },
          { "str":"mul     dword ptr [esp+14h]" },
          { "str":"xchg    eax, ecx" },
          { "str":"mul     dword ptr [esp+10h]" },
          { "str":"add     edx, ecx" },
          { "str":"jb      short loc_10004E3A" }
        ],
        "callees":[]
      },
{
        "tag":"label_588",
        "label":"label_588",
        "out_true":"loc_10004E3A",
        "out_false":"label_589",
        "last_inst":"ja",
        "instructions":[
          { "str":"cmp     edx, [esp+0Ch]" },
          { "str":"ja      short loc_10004E3A" }
        ],
        "callees":[]
      },
{
        "tag":"label_589",
        "label":"label_589",
        "out_true":"loc_10004E42",
        "out_false":"label_590",
        "last_inst":"jb",
        "instructions":[
          { "str":"jb      short loc_10004E42" }
        ],
        "callees":[]
      },
{
        "tag":"label_590",
        "label":"label_590",
        "out_true":"loc_10004E42",
        "out_false":"loc_10004E3A",
        "last_inst":"jb",
        "instructions":[
          { "str":"cmp     eax, [esp+8]" },
          { "str":"jbe     short loc_10004E42" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004E3A",
        "label":"loc_10004E3A",
        "out_true":"loc_10004E42",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"sub     eax, [esp+10h]" },
          { "str":"sbb     edx, [esp+14h]" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004E42",
        "label":"loc_10004E42",
        "out_true":"loc_10004E51",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"sub     eax, [esp+8]" },
          { "str":"sbb     edx, [esp+0Ch]" },
          { "str":"neg     edx" },
          { "str":"neg     eax" },
          { "str":"sbb     edx, 0" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004E51",
        "label":"loc_10004E51",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     ebx" },
          { "str":"retn    10h" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"sub_10004E55",
    "label":"sub_10004E55",
    "type":"idapro",
    "callees":[
      { "tag":"sub_100041E8" },
      { "tag":"sub_100046C4" }
    ],
    "blocks":[
      {
        "tag":"sub_10004E55",
        "label":"sub_10004E55",
        "out_true":"loc_10004E82",
        "out_false":"label_591",
        "last_inst":"jnz",
        "instructions":[
          { "str":"push    ebp" },
          { "str":"mov     ebp, esp" },
          { "str":"push    ecx" },
          { "str":"cmp     dword_10008C24, 0" },
          { "str":"push    ebx" },
          { "str":"push    esi" },
          { "str":"push    edi" },
          { "str":"jnz     short loc_10004E82" }
        ],
        "callees":[]
      },
{
        "tag":"label_591",
        "label":"label_591",
        "out_true":"loc_10004F1B",
        "out_false":"label_592",
        "last_inst":"jl",
        "instructions":[
          { "str":"mov     eax, dword ptr [ebp+CharType]" },
          { "str":"cmp     eax, 41h" },
          { "str":"jl      loc_10004F1B" }
        ],
        "callees":[]
      },
{
        "tag":"label_592",
        "label":"label_592",
        "out_true":"loc_10004F1B",
        "out_false":"label_593",
        "last_inst":"jg",
        "instructions":[
          { "str":"cmp     eax, 5Ah" },
          { "str":"jg      loc_10004F1B" }
        ],
        "callees":[]
      },
{
        "tag":"label_593",
        "label":"label_593",
        "out_true":"loc_10004F1B",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"add     eax, 20h" },
          { "str":"jmp     loc_10004F1B" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004E82",
        "label":"loc_10004E82",
        "out_true":"loc_10004EB6",
        "out_false":"label_594",
        "last_inst":"jg",
        "instructions":[
          { "str":"mov     ebx, dword ptr [ebp+CharType]" },
          { "str":"mov     edi, 100h" },
          { "str":"push    1" },
          { "str":"cmp     ebx, edi" },
          { "str":"pop     esi" },
          { "str":"jge     short loc_10004EB6" }
        ],
        "callees":[]
      },
{
        "tag":"label_594",
        "label":"label_594",
        "out_true":"loc_10004EA4",
        "out_false":"label_595",
        "last_inst":"jl",
        "instructions":[
          { "str":"cmp     dword_100086F4, esi" },
          { "str":"jle     short loc_10004EA4" }
        ],
        "callees":[]
      },
{
        "tag":"label_595",
        "label":"label_595",
        "out_true":"loc_10004EAE",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"push    esi" },
          { "str":"push    ebx" },
          { "str":"call    sub_100046C4" },
          { "str":"pop     ecx" },
          { "str":"pop     ecx" },
          { "str":"jmp     short loc_10004EAE" }
        ],
        "callees":[
          { "tag":"sub_100046C4" }
        ]
      },
{
        "tag":"loc_10004EA4",
        "label":"loc_10004EA4",
        "out_true":"loc_10004EAE",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"mov     eax, off_100084E8" },
          { "str":"mov     al, [eax+ebx*2]" },
          { "str":"and     eax, esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004EAE",
        "label":"loc_10004EAE",
        "out_true":"loc_10004EB6",
        "out_false":"loc_10004EB2",
        "last_inst":"jnz",
        "instructions":[
          { "str":"test    eax, eax" },
          { "str":"jnz     short loc_10004EB6" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004EB2",
        "label":"loc_10004EB2",
        "out_true":"loc_10004F1B",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"mov     eax, ebx" },
          { "str":"jmp     short loc_10004F1B" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004EB6",
        "label":"loc_10004EB6",
        "out_true":"loc_10004EDA",
        "out_false":"label_596",
        "last_inst":"jz",
        "instructions":[
          { "str":"mov     edx, off_100084E8" },
          { "str":"mov     eax, ebx" },
          { "str":"sar     eax, 8" },
          { "str":"movzx   ecx, al" },
          { "str":"test    byte ptr [edx+ecx*2+1], 80h" },
          { "str":"jz      short loc_10004EDA" }
        ],
        "callees":[]
      },
{
        "tag":"label_596",
        "label":"label_596",
        "out_true":"loc_10004EE3",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"and     byte ptr [ebp+0Ah], 0" },
          { "str":"push    2" },
          { "str":"mov     byte ptr [ebp+CharType], al" },
          { "str":"mov     byte ptr [ebp+CharType+1], bl" },
          { "str":"pop     eax" },
          { "str":"jmp     short loc_10004EE3" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004EDA",
        "label":"loc_10004EDA",
        "out_true":"loc_10004EE3",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"and     byte ptr [ebp+CharType+1], 0" },
          { "str":"mov     byte ptr [ebp+CharType], bl" },
          { "str":"mov     eax, esi" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004EE3",
        "label":"loc_10004EE3",
        "out_true":"loc_10004EB2",
        "out_false":"label_597",
        "last_inst":"jz",
        "instructions":[
          { "str":"push    esi" },
          { "str":"push    0" },
          { "str":"lea     ecx, [ebp+DestStr]" },
          { "str":"push    3" },
          { "str":"push    ecx" },
          { "str":"push    eax" },
          { "str":"lea     eax, [ebp+CharType]" },
          { "str":"push    eax" },
          { "str":"push    edi" },
          { "str":"push    dword_10008C24" },
          { "str":"call    sub_100041E8" },
          { "str":"add     esp, 20h" },
          { "str":"test    eax, eax" },
          { "str":"jz      short loc_10004EB2" }
        ],
        "callees":[
          { "tag":"sub_100041E8" }
        ]
      },
{
        "tag":"label_597",
        "label":"label_597",
        "out_true":"loc_10004F0E",
        "out_false":"label_598",
        "last_inst":"jnz",
        "instructions":[
          { "str":"cmp     eax, esi" },
          { "str":"jnz     short loc_10004F0E" }
        ],
        "callees":[]
      },
{
        "tag":"label_598",
        "label":"label_598",
        "out_true":"loc_10004F1B",
        "out_false":"",
        "last_inst":"jmp",
        "instructions":[
          { "str":"movzx   eax, [ebp+DestStr]" },
          { "str":"jmp     short loc_10004F1B" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004F0E",
        "label":"loc_10004F0E",
        "out_true":"loc_10004F1B",
        "out_false":"",
        "last_inst":"",
        "instructions":[
          { "str":"movzx   eax, [ebp+var_3]" },
          { "str":"movzx   ecx, [ebp+DestStr]" },
          { "str":"shl     eax, 8" },
          { "str":"or      eax, ecx" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004F1B",
        "label":"loc_10004F1B",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"pop     edi" },
          { "str":"pop     esi" },
          { "str":"pop     ebx" },
          { "str":"leave" },
          { "str":"retn" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"rtn_9",
    "label":"rtn_9",
    "type":"ours",
    "callees":[],
    "blocks":[
      {
        "tag":"blk_599",
        "label":"blk_599",
        "out_true":"loc_10004F39",
        "out_false":"label_600",
        "last_inst":"jnz",
        "instructions":[
          { "str":"mov     eax, [esp+8]" },
          { "str":"mov     ecx, [esp+10h]" },
          { "str":"or      ecx, eax" },
          { "str":"mov     ecx, [esp+0Ch]" },
          { "str":"jnz     short loc_10004F39" }
        ],
        "callees":[]
      },
{
        "tag":"label_600",
        "label":"label_600",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"mov     eax, [esp+4]" },
          { "str":"mul     ecx" },
          { "str":"retn    10h" }
        ],
        "callees":[]
      },
{
        "tag":"loc_10004F39",
        "label":"loc_10004F39",
        "out_true":"",
        "out_false":"",
        "last_inst":"retn",
        "instructions":[
          { "str":"push    ebx" },
          { "str":"mul     ecx" },
          { "str":"mov     ebx, eax" },
          { "str":"mov     eax, [esp+8]" },
          { "str":"mul     dword ptr [esp+14h]" },
          { "str":"add     ebx, eax" },
          { "str":"mov     eax, [esp+8]" },
          { "str":"mul     ecx" },
          { "str":"add     edx, ebx" },
          { "str":"pop     ebx" },
          { "str":"retn    10h" }
        ],
        "callees":[]
      }
    ]
  },{
    "tag":"RtlUnwind",
    "label":"RtlUnwind",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"_ebx_esi_4_8_",
    "label":"[ebx+esi*4+8]",
    "type":"indirect",
    "callees":[],
    "blocks":[]
  },{
    "tag":"_edi_ecx_4_4_",
    "label":"[edi+ecx*4+4]",
    "type":"indirect",
    "callees":[],
    "blocks":[]
  },{
    "tag":"_edi_ecx_4_8_",
    "label":"[edi+ecx*4+8]",
    "type":"indirect",
    "callees":[],
    "blocks":[]
  },{
    "tag":"__alloca_probe",
    "label":"__alloca_probe",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_DeleteCriticalSection",
    "label":"ds:DeleteCriticalSection",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_EnterCriticalSection",
    "label":"ds:EnterCriticalSection",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_ExitProcess",
    "label":"ds:ExitProcess",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_FreeEnvironmentStringsA",
    "label":"ds:FreeEnvironmentStringsA",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_FreeEnvironmentStringsW",
    "label":"ds:FreeEnvironmentStringsW",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_GetCPInfo",
    "label":"ds:GetCPInfo",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_GetCommandLineA",
    "label":"ds:GetCommandLineA",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_GetCurrentProcess",
    "label":"ds:GetCurrentProcess",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_GetCurrentThreadId",
    "label":"ds:GetCurrentThreadId",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_GetEnvironmentStrings",
    "label":"ds:GetEnvironmentStrings",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_GetEnvironmentVariableA",
    "label":"ds:GetEnvironmentVariableA",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_GetFileType",
    "label":"ds:GetFileType",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_GetLastError",
    "label":"ds:GetLastError",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_GetModuleFileNameA",
    "label":"ds:GetModuleFileNameA",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_GetModuleHandleA",
    "label":"ds:GetModuleHandleA",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_GetStartupInfoA",
    "label":"ds:GetStartupInfoA",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_GetStdHandle",
    "label":"ds:GetStdHandle",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_GetStringTypeA",
    "label":"ds:GetStringTypeA",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_GetStringTypeW",
    "label":"ds:GetStringTypeW",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_GetVersion",
    "label":"ds:GetVersion",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_GetVersionExA",
    "label":"ds:GetVersionExA",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_HeapAlloc",
    "label":"ds:HeapAlloc",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_HeapCreate",
    "label":"ds:HeapCreate",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_HeapDestroy",
    "label":"ds:HeapDestroy",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_HeapFree",
    "label":"ds:HeapFree",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_HeapReAlloc",
    "label":"ds:HeapReAlloc",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_InitializeCriticalSection",
    "label":"ds:InitializeCriticalSection",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_InterlockedIncrement",
    "label":"ds:InterlockedIncrement",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_LCMapStringA",
    "label":"ds:LCMapStringA",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_LCMapStringW",
    "label":"ds:LCMapStringW",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_LeaveCriticalSection",
    "label":"ds:LeaveCriticalSection",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_LoadLibraryA",
    "label":"ds:LoadLibraryA",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_MultiByteToWideChar",
    "label":"ds:MultiByteToWideChar",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_SetHandleCount",
    "label":"ds:SetHandleCount",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_SetLastError",
    "label":"ds:SetLastError",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_TerminateProcess",
    "label":"ds:TerminateProcess",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_TlsAlloc",
    "label":"ds:TlsAlloc",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_TlsFree",
    "label":"ds:TlsFree",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_TlsGetValue",
    "label":"ds:TlsGetValue",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_TlsSetValue",
    "label":"ds:TlsSetValue",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_VirtualAlloc",
    "label":"ds:VirtualAlloc",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_VirtualFree",
    "label":"ds:VirtualFree",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_WideCharToMultiByte",
    "label":"ds:WideCharToMultiByte",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ds_WriteFile",
    "label":"ds:WriteFile",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"dword_10008C08",
    "label":"dword_10008C08",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"eax",
    "label":"eax",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"ebp",
    "label":"ebp",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"edi",
    "label":"edi",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"esi",
    "label":"esi",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"loc_10002055",
    "label":"loc_10002055",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"loc_100020DE",
    "label":"loc_100020DE",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"loc_10002163",
    "label":"loc_10002163",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"loc_100021BB",
    "label":"loc_100021BB",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"loc_10002287",
    "label":"loc_10002287",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"loc_100022E6",
    "label":"loc_100022E6",
    "type":"library",
    "callees":[],
    "blocks":[]
  },{
    "tag":"off_10006030",
    "label":"off_10006030",
    "type":"library",
    "callees":[],
    "blocks":[]
  }
  ]
}
